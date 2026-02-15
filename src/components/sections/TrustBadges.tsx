"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, TrendingUp, Users } from "lucide-react";

const badges = [
    {
        label: "CA Certified",
        icon: ShieldCheck,
        description: "Experienced Professionals",
        color: "text-primary",
    },
    {
        label: "10+ Years",
        icon: CheckCircle,
        description: "Proven Track Record",
        color: "text-ring",
    },
    {
        label: "500+ Clients",
        icon: Users,
        description: "Trusted Nationwide",
        color: "text-primary",
    },
    {
        label: "Growth Focused",
        icon: TrendingUp,
        description: "Maximizing Returns",
        color: "text-ring",
    },
];

export function TrustBadges() {
    return (
        <section className="bg-muted/30 py-12 lg:py-16">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center space-y-2 text-center"
                        >
                            <div className={`p-4 rounded-full bg-background border shadow-sm ${badge.color}`}>
                                <badge.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-primary">{badge.label}</h3>
                            <p className="text-sm text-muted-foreground">{badge.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
