import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function ComplianceGSTPage() {
    return (
        <div className="container py-12 md:py-24 space-y-16">
            <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="font-medium text-primary">Compliance & GST</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">Comprehensive Compliance & GST Services</h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Ensure your business operates smoothly with our end-to-end compliance solutions. From GST filing to regulatory audits, we keep you compliant and worry-free.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-primary">Staying Compliant Made Easy</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Navigating the ever-evolving regulatory landscape can be challenging. Our dedicated compliance team ensures you meet all statutory requirements, avoiding penalties and legal hassles.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Timely and Accurate Filings",
                            "Proactive Risk Management",
                            "Seamless Audit Support",
                            "Expert Interpretation of GST Laws",
                            "Reduce Operational Disruptions"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-ring shrink-0" />
                                <span className="font-medium text-primary">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-muted p-8 rounded-xl border shadow-sm">
                    <h3 className="text-2xl font-bold text-primary mb-6">Our Compliance Services:</h3>
                    <ul className="space-y-3">
                        <li className="p-3 bg-background rounded-lg border">GST Registration & Monthly Returns</li>
                        <li className="p-3 bg-background rounded-lg border">ROC & Company Law Compliance</li>
                        <li className="p-3 bg-background rounded-lg border">TDS/TCS Returns & Advisory</li>
                        <li className="p-3 bg-background rounded-lg border">Payroll & labor Law Compliance</li>
                        <li className="p-3 bg-background rounded-lg border">Internal & Statutory Audits</li>
                    </ul>
                </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold">Simplify Your Compliance Today</h2>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                    Let us handle the red tape so you can focus on building your business. Contact us for a comprehensive compliance checkup.
                </p>
                <Button asChild size="lg" className="bg-ring text-primary hover:bg-ring/90 font-semibold">
                    <Link href="/contact">Get Compliant</Link>
                </Button>
            </div>
        </div>
    );
}
