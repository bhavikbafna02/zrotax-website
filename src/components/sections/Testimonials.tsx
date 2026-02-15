"use client";

import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        company: "TechSolutions Pvt Ltd",
        quote: "Zrotax transformed our financial planning. Their strategic advice helped us save significantly on taxes while ensuring full compliance.",
    },
    {
        name: "Sneha Gupta",
        company: "GreenLeaf Ventures",
        quote: "Professional, timely, and incredibly knowledgeable. The team at Zrotax feels like an extension of our own finance department.",
    },
    {
        name: "Amit Patel",
        company: "Patel Manufacturing",
        quote: "Navigating GST was a nightmare until we partnered with Zrotax. Their expertise made the transition seamless and worry-free.",
    },
];

export function Testimonials() {
    return (
        <section className="py-20 lg:py-32 bg-primary/5">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">What Our Clients Say</h2>
                    <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                        Trusted by businesses across industries for our commitment to excellence.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-background border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                                <blockquote className="text-muted-foreground italic leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
