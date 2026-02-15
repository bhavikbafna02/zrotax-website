"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/scroll-animations";

const posts = [
    {
        title: "Understanding the New GST Regulations 2024",
        excerpt: "A comprehensive guide to the latest changes in GST laws and how they impact your small business.",
        date: "May 15, 2024",
        category: "GST Compliance",
        slug: "new-gst-regulations-2024"
    },
    {
        title: "Tax Saving Strategies for Startups",
        excerpt: "Maximize your runway with these essential tax planning tips designed specifically for early-stage companies.",
        date: "April 22, 2024",
        category: "Tax Planning",
        slug: "tax-saving-startups"
    },
    {
        title: "The Importance of Regular Financial Audits",
        excerpt: "Why conducting regular internal audits can save your business from costly errors and fraud.",
        date: "March 10, 2024",
        category: "Audit & Assurance",
        slug: "financial-audits-importance"
    },
    {
        title: "Navigating Income Tax Filing: A Step-by-Step Guide",
        excerpt: "Don't stress about tax season. Follow our simple checklist to ensure a smooth filing process.",
        date: "February 28, 2024",
        category: "Income Tax",
        slug: "income-tax-filing-guide"
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
