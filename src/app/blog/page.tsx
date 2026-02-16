"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/scroll-animations";

const posts = [
    {
        title: "New form 44 replacing form 67",
        excerpt: "US Tax Deducted Above ₹1 Lakh? This Is Mandatory If You Want FTC in India. Form 67 has been replaced with Form 44 under Draft Income-tax Rules, 2026.",
        date: "February 13, 2026",
        category: "International Tax",
        slug: "new-form-44-replacing-form-67"
    },
    {
        title: "Big Tech M&A Update: IBM to Acquire Confluent",
        excerpt: "What happens to RSU/ESPP held by Confluent employees? Understanding the tax implications of the IBM acquisition at $31 per share.",
        date: "January 16, 2026",
        category: "M&A Tax",
        slug: "ibm-acquires-confluent-tax-implications"
    },
    {
        title: "Understanding Income Tax Refunds: What You Need to Know",
        excerpt: "Refund held? Many taxpayers are receiving messages about refund claims being kept on hold under the Risk Management Process. Here's what it means.",
        date: "January 5, 2026",
        category: "Income Tax",
        slug: "understanding-income-tax-refunds"
    },
    {
        title: "The Importance of Disclosing Foreign Assets",
        excerpt: "Avoid heavy penalties by disclosing foreign assets. Lessons from a recent case involving non-disclosure of foreign dividend income.",
        date: "December 28, 2025",
        category: "Compliance",
        slug: "importance-disclosing-foreign-assets"
    },
];

export default function BlogPage() {
    return (
        <div className="container py-12 md:py-24 space-y-12">
            <ScrollReveal>
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">Financial Insights</h1>
                    <p className="text-xl text-muted-foreground">
                        Expert analysis, latest updates, and practical advice to help you manage your finances better.
                    </p>
                </div>
            </ScrollReveal>

            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-2" staggerDelay={0.12}>
                {posts.map((post) => (
                    <StaggerItem key={post.slug}>
                        <HoverCard className="h-full">
                            <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-ring font-medium">{post.category}</span>
                                        <span className="text-sm text-muted-foreground">{post.date}</span>
                                    </div>
                                    <CardTitle className="text-2xl text-foreground hover:text-ring transition-colors">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="link" className="px-0 text-ring hover:text-ring/80">
                                        <Link href={`/blog/${post.slug}`}>
                                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </HoverCard>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            <ScrollReveal>
                <div className="flex justify-center mt-8">
                    <Button variant="outline" className="border-border text-foreground hover:bg-ring hover:text-white transition-all duration-300">Load More Articles</Button>
                </div>
            </ScrollReveal>
        </div>
    );
}
