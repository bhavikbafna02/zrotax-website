"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart, FileText, Globe } from "lucide-react";

const services = [
    {
        title: "Tax Planning",
        description: "Minimize your tax liability with strategic planning and ensure complete adherence to ever-changing tax laws.",
        icon: FileText,
        href: "/services/tax-planning",
    },
    {
        title: "Business Advisory",
        description: "Drive your business growth with actionable insights, financial modeling, and expert consulting.",
        icon: BarChart,
        href: "/services/business-advisory",
    },
    {
        title: "Compliance & GST",
        description: "Seamless GST filing, regulatory compliance, and audit support to keep your operations running smoothly.",
        icon: Globe,
        href: "/services/compliance-gst",
    },
];

export function ServicesPreview() {
    return (
        <section className="py-20 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Our Expertise</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Comprehensive financial solutions tailored to your unique business needs.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                    {services.map((service) => (
                        <Card key={service.title} className="group transition-all hover:shadow-lg hover:-translate-y-1 bg-card border-muted">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-muted-foreground leading-relaxed min-h-[80px]">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="ghost" className="w-full justify-start pl-0 text-primary hover:text-primary/80 hover:bg-transparent group-hover:pl-2 transition-all">
                                    <Link href={service.href}>
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
