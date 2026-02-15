import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BarChart, FileText, Globe, Scale, PiggyBank, Briefcase } from "lucide-react";

export const services = [
    {
        title: "Tax Planning",
        description: "Minimize your tax liability with strategic planning and ensure complete adherence to ever-changing tax laws.",
        icon: FileText,
        href: "/services/tax-planning",
    },
    {
        title: "Business Advisory",
        description: "Drive your business growth with actionable insights, financial modeling, and expert consulting.",
        icon: BarChart,
        href: "/services/business-advisory",
    },
    {
        title: "Compliance & GST",
        description: "Seamless GST filing, regulatory compliance, and audit support to keep your operations running smoothly.",
        icon: Globe,
        href: "/services/compliance-gst",
    },
    {
        title: "Bookkeeping & Accounting",
        description: "Accurate and timely bookkeeping services to keep your financial records organized and up-to-date.",
        icon: Scale,
        href: "/services",
    },
    {
        title: "Wealth Management",
        description: "Comprehensive wealth management solutions to protect and grow your assets for the future.",
        icon: PiggyBank,
        href: "/services",
    },
    {
        title: "Start-up Consultancy",
        description: "End-to-end support for startups, from incorporation to funding and scaling strategies.",
        icon: Briefcase,
        href: "/services",
    },
];

export default function ServicesPage() {
    return (
        <div className="container py-12 md:py-24 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">Our Services</h1>
                <p className="text-xl text-muted-foreground">
                    Comprehensive financial solutions designed to empower your business at every stage of growth.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Card key={service.title} className="flex flex-col justify-between transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">
                                {service.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="ghost" className="w-full justify-start pl-0 text-primary hover:text-primary/80 hover:bg-transparent">
                                <Link href={service.href}>
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold text-primary">Need a Custom Solution?</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Every business is unique. Contact us to discuss your specific requirements and how we can help you achieve your financial goals.
                </p>
                <Button asChild size="lg" className="bg-primary text-primary-foreground">
                    <Link href="/contact">Request Consultation</Link>
                </Button>
            </div>
        </div>
    );
}
