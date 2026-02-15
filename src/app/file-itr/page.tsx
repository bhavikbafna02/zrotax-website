"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calculator, CalendarCheck, CheckCircle2, FileText, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/scroll-animations";
import { motion } from "framer-motion";

export default function FileITRPage() {
    return (
        <div className="container py-12 md:py-24 space-y-20">

            {/* Hero / Main CTA Section */}
            <section className="text-center max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium text-foreground bg-muted mb-4"
                >
                    <CalendarCheck className="mr-2 h-4 w-4 text-ring" /> Assessment Year 2025-26
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground leading-tight"
                >
                    File <span className="text-ring">ITR</span> With Us
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    Expert-assisted tax filing to maximize your refunds and ensure 100% compliance.
                    We handle the complexities so you don&apos;t have to.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                >
                    <Button asChild size="lg" className="h-14 px-8 text-lg bg-ring text-white hover:bg-ring/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center">
                        <Link href="/contact">
                            Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-border text-foreground hover:bg-accent transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center">
                        <Link href="https://wa.me/918380894711" target="_blank">
                            <MessageSquare className="mr-2 h-5 w-5 text-green-500" /> Connect on WhatsApp
                        </Link>
                    </Button>
                </motion.div>
            </section>

            {/* Value Proposition Cards */}
            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.15}>
                {[
                    { title: "Expert Review", desc: "Every return is reviewed by CA professionals to ensure accuracy.", icon: CheckCircle2 },
                    { title: "Maximized Refunds", desc: "We identify all applicable deductions to minimize your liability.", icon: Calculator },
                    { title: "Document Vault", desc: "Securely store and access your tax documents anytime.", icon: FileText }
                ].map((item, i) => (
                    <StaggerItem key={i}>
                        <HoverCard>
                            <Card className="bg-card border border-border text-center hover:shadow-lg transition-all">
                                <CardContent className="pt-6 space-y-4">
                                    <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </HoverCard>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            {/* Bottom Text */}
            <ScrollReveal>
                <div className="text-center text-muted-foreground max-w-lg mx-auto border-t border-border pt-12">
                    <p>We look forward to helping you achieve your financial goals with hassle-free tax filing.</p>
                </div>
            </ScrollReveal>
        </div>
    );
}
