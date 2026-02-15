import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-24 space-y-16">
            <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">About Zrotax</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Leading the way in financial excellence. Zrotax is a premier Chartered Accountant firm dedicated to empowering businesses with strategic financial insights and robust compliance solutions.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button asChild size="lg">
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/services">View Services</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl bg-muted/50 border shadow-lg flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="text-6xl font-black text-primary/10 tracking-widest">ABOUT</div>
                        <div className="text-2xl font-bold text-primary mt-4">Our Story</div>
                    </div>
                </div>
            </section>

            <section className="grid gap-8 md:grid-cols-3 text-center">
                <div className="p-8 rounded-xl bg-primary/5 border border-primary/10">
                    <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                    <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="p-8 rounded-xl bg-primary/5 border border-primary/10">
                    <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                    <p className="text-muted-foreground">Satisfied Clients</p>
                </div>
                <div className="p-8 rounded-xl bg-primary/5 border border-primary/10">
                    <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                    <p className="text-muted-foreground">Compliance Rate</p>
                </div>
            </section>

            <section className="space-y-8 max-w-4xl mx-auto">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-primary">Our Mission & Values</h2>
                    <p className="text-muted-foreground text-lg">
                        To provide world-class financial advisory that enables our clients to focus on what they do best—building their business.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {[
                        "Integrity in every transaction",
                        "Client-first approach",
                        "Excellence in execution",
                        "Innovation in financial strategies",
                        "Transparancy and Trust",
                        "Confidentiality Guaranteed"
                    ].map((value, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-lg border bg-card">
                            <CheckCircle2 className="h-5 w-5 text-ring shrink-0" />
                            <span className="font-medium text-primary">{value}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
