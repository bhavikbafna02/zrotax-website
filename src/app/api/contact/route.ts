import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    subject: z.string().min(5),
    message: z.string().min(10),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: "Invalid input", details: result.error.errors },
                { status: 400 }
            );
        }

        // data is valid
        const { name, email, phone, subject, message } = result.data;

        // Here you would integrate with Resend, Nodemailer, or any email service
        // For now, we'll simulate a successful email sending
        console.log("Email to be sent:", { name, email, phone, subject, message });

        return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
