"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Lock, Award, ShieldCheck, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem, ParallaxSection, HoverCard } from "@/components/ui/scroll-animations";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-24 space-y-20">
            {/* Hero Section */}
            <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-6"
                >
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                        About Zrotax
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground leading-tight">
                        We Simplify Complex Taxes for Modern Professionals.
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We are a new-age tax and financial consultancy firm, trusted by salaried professionals, global employees with RSUs/ESPPs, freelancers, startup founders, and growing businesses.
                        Whether it&apos;s basic tax filing or complex foreign income and equity compensation — we simplify it all with clarity, compliance, and confidence.
                    </p>
                    <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md px-6 h-11 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: '#C6A85E' }}>
                            Partner With Us
                        </Link>
                        <Button asChild variant="outline" size="lg" className="border-border transition-all duration-300 hover:-translate-y-0.5">
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-square lg:aspect-video overflow-hidden rounded-2xl bg-muted/30 border border-border/50 shadow-xl flex items-center justify-center p-8"
                >
                    <div className="grid grid-cols-2 gap-4 w-full h-full opacity-80">
                        <motion.div className="bg-primary/5 rounded-xl" animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
                        <motion.div className="bg-primary/10 rounded-xl translate-y-8" animate={{ opacity: [0.8, 0.5, 0.8] }} transition={{ duration: 5, repeat: Infinity }} />
                        <motion.div className="bg-primary/10 rounded-xl -translate-y-8" animate={{ opacity: [0.6, 0.9, 0.6] }} transition={{ duration: 6, repeat: Infinity }} />
                        <motion.div className="bg-primary/5 rounded-xl" animate={{ opacity: [0.7, 0.4, 0.7] }} transition={{ duration: 4.5, repeat: Infinity }} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-card/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-border text-center max-w-sm">
                            <h3 className="text-3xl font-bold text-foreground mb-2">3+</h3>
                            <p className="text-muted-foreground font-medium">Cities Presence</p>
                            <div className="text-xs text-muted-foreground mt-4 flex justify-between gap-4">
                                <span>Mumbai</span> | <span>Bangalore</span> | <span>Akola</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Vision & Mission */}
            <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
                <StaggerItem>
                    <HoverCard>
                        <Card className="bg-card border border-ring/30 relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-ring/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <CardContent className="p-8 md:p-12 space-y-4 relative z-10">
                                <div className="h-12 w-12 rounded-lg bg-ring/10 flex items-center justify-center mb-4">
                                    <Lightbulb className="h-6 w-6 text-ring" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    We are passionate about unlocking amazing tax benefits you may not even know about. Our goal is to deliver a comprehensive and seamless solution that makes filing your return and paying taxes a breeze.
                                </p>
                            </CardContent>
                        </Card>
                    </HoverCard>
                </StaggerItem>
                <StaggerItem>
                    <HoverCard>
                        <Card className="bg-muted/30 border-border/50 h-full">
                            <CardContent className="p-8 md:p-12 space-y-4">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Target className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    To simplify the process of managing and paying taxes for individuals in India. We provide an easy platform where you upload documents, and we guide you with complete end-to-end services.
                                </p>
                            </CardContent>
                        </Card>
                    </HoverCard>
                </StaggerItem>
            </StaggerContainer>

            {/* Why Choose Us */}
            <ParallaxSection speed={0.1}>
                <section className="space-y-12">
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground">Why Choose Zrotax?</h2>
                            <p className="text-muted-foreground text-lg">
                                We prioritize your privacy and compliance above all else.
                            </p>
                        </div>
                    </ScrollReveal>

                    <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
                        {[
                            { title: "Data Privacy First", desc: "We value your data. Your privacy is our priority. We employ strict protocols to ensure your financial information is secure.", icon: Lock },
                            { title: "Zero Compliance Risk", desc: "Our expert team ensures 100% adherence to tax laws, eliminating any risk of penalties or non-compliance.", icon: ShieldCheck },
                            { title: "RSU & ESPP Experts", desc: "Connect directly with CA Pranay Bafna, a leading expert in RSU and ESPP taxation for global employees.", icon: Award },
                        ].map((feature, i) => (
                            <StaggerItem key={i}>
                                <HoverCard>
                                    <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 h-full">
                                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                            <feature.icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.desc}</p>
                                    </div>
                                </HoverCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>
            </ParallaxSection>

            {/* Team Section */}
            <section className="space-y-12">
                <ScrollReveal>
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">Meet The Leadership</h2>
                        <p className="text-muted-foreground text-lg">The experts behind Zrotax.</p>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid gap-8 md:grid-cols-3 justify-center" staggerDelay={0.2}>
                    {[
                        { name: "CA Pranay Bafna", role: "Founder", desc: "Expert in RSU/ESPP & International Taxation", image: "/team/pranay.png" },
                        { name: "CA Neha Bafna", role: "Co-Founder", desc: "Specialist in Corporate Compliance & GST", image: "/team/neha.png" },
                        { name: "Bhavik Bafna", role: "CTO", desc: "Tech Innovation & Platform Security", image: "/team/bhavik.png" }
                    ].map((member, i) => (
                        <StaggerItem key={i}>
                            <HoverCard>
                                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="aspect-[4/5] relative overflow-hidden bg-muted/50 group-hover:bg-muted/70 transition-colors">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 text-center space-y-2 relative z-20 bg-card -mt-2 mx-4 rounded-xl shadow-lg border border-border/50">
                                        <h3 className="font-bold text-xl text-foreground">{member.name}</h3>
                                        <p className="text-sm font-medium text-ring uppercase tracking-wider">{member.role}</p>
                                        <p className="text-sm text-muted-foreground pt-2">{member.desc}</p>
                                    </div>
                                </div>
                            </HoverCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>
        </div>
    );
}
