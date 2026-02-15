"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-20 lg:py-32">
            <div className="container relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left lg:justify-between">
                <motion.div
                    className="flex flex-col gap-6 lg:w-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                        Strategic Financial <span className="text-ring">Excellence</span>
                    </h1>
                    <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                        Expert Chartered Accountants delivering comprehensive Tax, Audit, and Advisory solutions with precision and integrity.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <Button asChild size="lg" className="h-12 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="/contact">
                                Consult Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg hover:bg-accent hover:text-accent-foreground border-primary text-primary">
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative h-[400px] w-full max-w-[500px] rounded-2xl bg-muted p-8 shadow-2xl border border-muted-foreground/10 flex items-center justify-center">
                        {/* Placeholder for a professional image or graphic */}
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl"></div>
                        <div className="text-center space-y-4 relative z-10">
                            <div className="text-6xl font-bold text-primary/20">ZROTAX</div>
                            <div className="text-lg font-medium text-muted-foreground">Trusted by 500+ Clients</div>
                            <div className="w-24 h-1 bg-ring mx-auto rounded-full"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-accent/30 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] bg-ring/10 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"></div>
        </section>
    );
}
