import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calculator, CalendarCheck, CheckCircle2, FileText, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FileITRPage() {
    return (
        <div className="container py-12 md:py-24 space-y-20">

            {/* Hero / Main CTA Section */}
            <section className="text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-primary bg-primary/5 mb-4">
                    <CalendarCheck className="mr-2 h-4 w-4" /> Assessment Year 2025-26
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary leading-tight">
                    File <span className="text-ring">ITR</span> With Us
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Expert-assisted tax filing to maximize your refunds and ensure 100% compliance.
                    We handle the complexities so you don't have to.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                    <Button asChild size="lg" className="h-14 px-8 text-lg bg-ring text-primary dark:text-primary-foreground hover:bg-ring/90 shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                        <Link href="/contact">
                            Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-primary/20 dark:border-primary-foreground/20 dark:text-primary-foreground hover:bg-primary/5 dark:hover:bg-primary/10 transition-all flex items-center justify-center bg-transparent">
                        <Link href="https://wa.me/918380894711" target="_blank">
                            <MessageSquare className="mr-2 h-5 w-5 text-green-600" /> Connect on WhatsApp
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Value Proposition Cards - Minimal */}
            <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                    {
                        title: "Expert Review",
                        desc: "Every return is reviewed by CA professionals to ensure accuracy.",
                        icon: CheckCircle2
                    },
                    {
                        title: "Maximized Refunds",
                        desc: "We identify all applicable deductions to minimize your liability.",
                        icon: Calculator
                    },
                    {
                        title: "Document Vault",
                        desc: "Securely store and access your tax documents anytime.",
                        icon: FileText
                    }
                ].map((item, i) => (
                    <Card key={i} className="bg-muted/30 border-none shadow-none text-center hover:bg-muted/50 transition-colors">
                        <CardContent className="pt-6 space-y-4">
                            <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg text-primary">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </section>

            {/* Bottom Text */}
            <div className="text-center text-muted-foreground max-w-lg mx-auto border-t pt-12">
                <p>We look forward to helping you achieve your financial goals with hassle-free tax filing.</p>
            </div>
        </div>
    );
}
