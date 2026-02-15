import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Lock, Award, Users, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-24 space-y-20">
            {/* Hero Section */}
            <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                        About Zrotax
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary leading-tight">
                        We Simplify Complex Taxes for Modern Professionals.
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We are a new-age tax and financial consultancy firm, trusted by salaried professionals, global employees with RSUs/ESPPs, freelancers, startup founders, and growing businesses.
                        Whether it’s basic tax filing or complex foreign income and equity compensation — we simplify it all with clarity, compliance, and confidence.
                    </p>
                    <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="/contact">Partner With Us</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative aspect-square lg:aspect-video overflow-hidden rounded-2xl bg-muted/30 border border-border/50 shadow-xl flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4 w-full h-full opacity-80">
                        <div className="bg-primary/5 rounded-xl"></div>
                        <div className="bg-primary/10 rounded-xl translate-y-8"></div>
                        <div className="bg-primary/10 rounded-xl -translate-y-8"></div>
                        <div className="bg-primary/5 rounded-xl"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-background/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border text-center max-w-sm">
                            <h3 className="text-3xl font-bold text-primary mb-2">3+</h3>
                            <p className="text-muted-foreground font-medium">Cities Presence</p>
                            <div className="text-xs text-muted-foreground mt-4 flex justify-between gap-4">
                                <span>Mumbai</span> | <span>Bangalore</span> | <span>Akola</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="grid md:grid-cols-2 gap-8">
                <Card className="bg-primary text-primary-foreground border-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-16 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <CardContent className="p-8 md:p-12 space-y-4 relative z-10">
                        <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                            <Lightbulb className="h-6 w-6 text-ring" />
                        </div>
                        <h2 className="text-2xl font-bold">Our Vision</h2>
                        <p className="text-primary-foreground/90 leading-relaxed text-lg">
                            We are passionate about unlocking amazing tax benefits you may not even know about. Our goal is to deliver a comprehensive and seamless solution that makes filing your return and paying taxes a breeze. We turn tax time into an effortless experience!
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-muted/30 border-border/50">
                    <CardContent className="p-8 md:p-12 space-y-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            To simplify the process of managing and paying taxes for individuals in India. We provide an easy platform where you upload documents, and we guide you with complete end-to-end services, ensuring zero hassle.
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Why Choose Us */}
            <section className="space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-primary">Why Choose Zrotax?</h2>
                    <p className="text-muted-foreground text-lg">
                        We prioritize your privacy and compliance above all else.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: "Data Privacy First",
                            desc: "We value your data. Your privacy is our priority. We employ strict protocols to ensure your financial information is secure.",
                            icon: Lock
                        },
                        {
                            title: "Zero Compliance Risk",
                            desc: "Our expert team ensures 100% adherence to tax laws, eliminating any risk of penalties or non-compliance.",
                            icon: ShieldCheck
                        },
                        {
                            title: "RSU & ESPP Experts",
                            desc: "Connect directly with CA Pranay Bafna, a leading expert in RSU and ESPP taxation for global employees.",
                            icon: Award
                        }
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300">
                            <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary">
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-primary">Meet The Leadership</h2>
                    <p className="text-muted-foreground text-lg">
                        The experts behind Zrotax.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 justify-center">
                    {[
                        { name: "CA Pranay Bafna", role: "Founder", desc: "Expert in RSU/ESPP & International Taxation" },
                        { name: "CA Neha Bafna", role: "Co-Founder", desc: "Specialist in Corporate Compliance & GST" },
                        { name: "Bhavik Bafna", role: "CTO", desc: "Tech Innovation & Platform Security" }
                    ].map((member, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all">
                            <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center group-hover:bg-muted/70 transition-colors">
                                <Avatar className="h-32 w-32">
                                    <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="p-6 text-center space-y-2">
                                <h3 className="font-bold text-xl text-primary">{member.name}</h3>
                                <p className="text-sm font-medium text-ring uppercase tracking-wider">{member.role}</p>
                                <p className="text-sm text-muted-foreground pt-2">{member.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
