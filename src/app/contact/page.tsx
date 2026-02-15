"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Phone, Mail, MapPin, Calendar, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function ContactPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        alert("Message sent! We will get back to you soon.")
        form.reset()
    }

    return (
        <div className="container py-12 md:py-24 space-y-20">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">Get in Touch</h1>
                <p className="text-xl text-muted-foreground">
                    Ready to simplify your taxes? Reach out to us for expert consultation.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-ring mt-1" />
                                <div>
                                    <h3 className="font-medium text-foreground">Our Office</h3>
                                    <p>Guruganesh Residency, Kirti Nagar,<br />Akola 444001, Maharashtra, India</p>
                                    <p className="text-sm mt-1 text-primary/80 font-medium">Presence in: Mumbai | Bangalore | Akola</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-ring" />
                                <div>
                                    <h3 className="font-medium text-foreground">Phone</h3>
                                    <p>+91 8380894711</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-ring" />
                                <div>
                                    <h3 className="font-medium text-foreground">Email</h3>
                                    <p>hi.zrotax@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-2xl border border-border space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#C6A85E' }}>
                                <Calendar className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Book an Appointment</h3>
                        </div>
                        <p className="text-muted-foreground">
                            Schedule a 1-on-1 consultation with our tax experts to discuss your specific needs.
                        </p>
                        <div className="space-y-3">
                            {["Detailed Tax Planning", "RSU/ESPP Consultation", "ITR Filing Assistance"].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                    <CheckCircle2 className="h-4 w-4 text-ring" /> {item}
                                </div>
                            ))}
                        </div>
                        <Link href="https://wa.me/918380894711" target="_blank" className="w-full inline-flex items-center justify-center rounded-md h-10 text-sm font-medium text-white transition-all hover:opacity-90" style={{ backgroundColor: '#C6A85E' }}>Schedule via WhatsApp</Link>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="your.email@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+91 9876543210" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <button type="submit" className="w-full inline-flex items-center justify-center rounded-md h-11 px-6 text-base font-medium text-white transition-all hover:opacity-90" style={{ backgroundColor: '#C6A85E' }}>Send Message</button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
