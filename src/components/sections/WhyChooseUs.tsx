"use client";

import { CheckCircle2, HandHeart, Laptop2, Target } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const reasons = [
    {
        title: "Proven Expertise",
        content: "With over a decade of experience, our Chartered Accountants bring deep industry knowledge and technical proficiency to every engagement.",
        icon: CheckCircle2,
    },
    {
        title: "Personalized Solutions",
        content: "We understand that every business is unique using a client-centric approach to tailor our strategies to your specific goals and challenges.",
        icon: HandHeart,
    },
    {
        title: "Technology Driven",
        content: "Leveraging the latest financial software and digital tools, we ensure accuracy, efficiency, and real-time insights for your business.",
        icon: Laptop2,
    },
    {
        title: "Holistic Growth",
        content: "Beyond compliance, we focus on strategic advisory that drives sustainable growth and long-term financial health.",
        icon: Target,
    },
];

export function WhyChooseUs() {
    return (
        <section className="bg-muted/50 py-20 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-ring/10 px-3 py-1 text-sm font-medium text-ring">
                            Why Zrotax?
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                            Partner with Excellence and Integrity.
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We go beyond traditional accounting. We are your strategic partners in navigating the complex financial landscape.
                        </p>
                        <div className="mt-8 grid gap-4">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background shadow-sm text-primary border border-muted-foreground/10">
                                        <reason.icon className="h-5 w-5" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-primary">{reason.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{reason.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl border bg-background shadow-xl lg:h-full min-h-[400px]">
                        {/* Placeholder for an image or graphic */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20 flex items-center justify-center">
                            <div className="text-center p-8 space-y-4">
                                <div className="text-primary font-bold text-2xl">Client Success is Our Priority</div>
                                <div className="text-muted-foreground">98% Client Retention Rate</div>
                                {/* Abstract Visual Elements */}
                                <div className="w-64 h-64 border-4 border-ring/20 rounded-full flex items-center justify-center absolute -top-10 -right-10 animate-pulse"></div>
                                <div className="w-48 h-48 border-4 border-primary/10 rounded-full flex items-center justify-center absolute -bottom-10 -left-10 animate-pulse delay-700"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
