"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="bg-primary py-20 lg:py-32 text-center text-primary-foreground">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Elevate Your Financial Strategy?
                </h2>
                <p className="mx-auto mt-4 max-w-[700px] text-lg text-primary-foreground/80 md:text-xl">
                    Contact Zrotax today for a personalized consultation and take the first step towards optimized compliance and growth.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg" className="bg-ring text-primary hover:bg-ring/90 font-semibold px-8 h-12 text-lg">
                        <Link href="/contact">
                            Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 h-12 px-8 text-lg hover:text-white">
                        <Link href="/about">Learn More</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
