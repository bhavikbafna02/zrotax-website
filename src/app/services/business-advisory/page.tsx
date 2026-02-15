import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function BusinessAdvisoryPage() {
    return (
        <div className="container py-12 md:py-24 space-y-16">
            <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="font-medium text-primary">Business Advisory</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">Strategic Business Advisory</h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Unlock your business's full potential with our tailored advisory services. We go beyond the numbers to provide actionable insights for sustainable growth.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-primary">Driving Business Growth</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        In today's competitive landscape, businesses need agile and forward-thinking strategies. Our advisory team partners with you to identify opportunities, mitigate risks, and streamline operations.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Identify Market Opportunities",
                            "Improve Operational Efficiency",
                            "Access to Capital and Funding",
                            "Mergers and Acquisitions Support",
                            "Succession Planning"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-ring shrink-0" />
                                <span className="font-medium text-primary">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-muted p-8 rounded-xl border shadow-sm">
                    <h3 className="text-2xl font-bold text-primary mb-6">Our Advisory Services Include:</h3>
                    <ul className="space-y-3">
                        <li className="p-3 bg-background rounded-lg border">Business Valuation & Due Diligence</li>
                        <li className="p-3 bg-background rounded-lg border">Financial Modeling & Forecasting</li>
                        <li className="p-3 bg-background rounded-lg border">Startup Consulting & Incubation</li>
                        <li className="p-3 bg-background rounded-lg border">Process Optimization & Restructuring</li>
                        <li className="p-3 bg-background rounded-lg border">Feasibility Studies</li>
                    </ul>
                </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to Scale Your Business?</h2>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                    Partner with Zrotax for expert guidance on your growth journey. Let's build a roadmap to success together.
                </p>
                <Button asChild size="lg" className="bg-ring text-primary hover:bg-ring/90 font-semibold">
                    <Link href="/contact">Get in Touch</Link>
                </Button>
            </div>
        </div>
    );
}
