import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Calculator, FileText, Globe, Home, LineChart, ShieldCheck, Users, Wallet } from "lucide-react";

const services = [
    {
        id: "financial-planning",
        title: "Financial Planning",
        subtitle: "Plan your money life",
        description: "Everyone has different financial goals, whether it's saving for retirement, buying a home, or paying for college. We help you develop a personalized plan to achieve them.",
        icon: LineChart,
        features: [
            "Set realistic financial goals",
            "Create a budget that works for you",
            "Develop a comprehensive savings plan",
            "Invest your money wisely",
            "Protect your assets with insurance"
        ],
        cta: "Start Planning"
    },
    {
        id: "tax-planning",
        title: "Tax Planning",
        subtitle: "Optimization of Taxes",
        description: "Taxes are inevitable, but they don't have to be a major burden. With careful planning, we help you minimize liability and keep more of what you earn.",
        icon: Calculator,
        features: [
            "Analyze your current tax situation",
            "Identify tax-saving opportunities",
            "Develop a tax-efficient future roadmap",
            "Accurate and timely return filing",
            "Resolve Income Tax issues"
        ],
        cta: "Optimize Taxes"
    },
    {
        id: "gst-services",
        title: "GST (Export of Services)",
        subtitle: "Compliance for Consultants & Freelancers",
        description: "Expert guidance on GST implications for export of services. We handle everything from registration to reconciliation, ensuring your business stays compliant.",
        icon: Globe,
        features: [
            "GST Registration",
            "Obtain LUT (Letter of Undertaking)",
            "File GSTR-1 & GSTR-3B",
            "Maintain Export Documents",
            "Reconciliation & Zero-rated supplies"
        ],
        cta: "Get GST Compliant"
    },
    {
        id: "huf-planning",
        title: "HUF Planning",
        subtitle: "Hindu Undivided Family",
        description: "Leverage the HUF structure to manage family assets and income efficiently while benefiting from significant tax exemptions and deductions.",
        icon: Users,
        features: [
            "HUF Formation & Registration",
            "Manage HUF Affairs",
            "Tax Benefits (Section 80C deductions)",
            "Separate Income Tax Slab benefits",
            "Manage Property & Business Income"
        ],
        cta: "Plan HUF"
    }
];

export default function ServicesPage() {
    return (
        <div className="container py-12 md:py-24 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">Our Expertise</h1>
                <p className="text-xl text-muted-foreground">
                    Comprehensive financial solutions tailored to your life and business needs.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {services.map((service) => (
                    <Card key={service.id} className="flex flex-col h-full border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md bg-card">
                        <CardHeader>
                            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <service.icon className="h-7 w-7" />
                            </div>
                            <div className="space-y-1">
                                <CardTitle className="text-2xl font-bold text-foreground">{service.title}</CardTitle>
                                <CardDescription className="text-base font-medium text-ring">{service.subtitle}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                            <div className="space-y-3">
                                <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-ring" /> WHAT WE DO:
                                </h4>
                                <ul className="grid gap-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ring/60 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-6">
                            <Button asChild className="w-full h-11 text-base bg-ring text-white hover:bg-ring/90">
                                <Link href="/contact">
                                    {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Process Section */}
            <div className="rounded-3xl bg-muted/30 p-8 md:p-12 lg:p-16 border border-border/50">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">How We Work</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our proven process ensures that we understand your unique situation and deliver results that matter.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-4">
                    {[
                        { title: "Discovery", desc: "We listen to your goals and analyze your current financial health.", icon: "1" },
                        { title: "Strategy", desc: "We design a customized roadmap tailored to your specific needs.", icon: "2" },
                        { title: "Execution", desc: "We implement the plan with precision, handling all compliance & documentation.", icon: "3" },
                        { title: "Review", desc: "We monitor progress and adjust strategies to ensure long-term success.", icon: "4" }
                    ].map((step, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center space-y-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card border-2 border-border text-xl font-bold text-primary shadow-sm hover:border-primary hover:scale-110 transition-all duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,168,94,0.15),transparent_50%)]"></div>
                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Ready to Secure Your Financial Future?</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Whether you need tax optimization, GST compliance, or a complete financial overhaul, Zrotax is here to guide you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button asChild size="lg" className="bg-ring text-white hover:bg-ring/90 font-bold px-8 h-12 border-none">
                            <Link href="/contact">Book a Consultation</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-accent h-12 px-8">
                            <Link href="https://wa.me/918380894711" target="_blank">Chat on WhatsApp</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
