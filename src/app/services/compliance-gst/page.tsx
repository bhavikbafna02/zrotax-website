import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function ComplianceGSTPage() {
    return (
        <div className="container py-12 md:py-24 space-y-16">
            <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-ring transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <Link href="/services" className="hover:text-ring transition-colors">Services</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="font-medium text-foreground">Compliance & GST</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">Comprehensive Compliance & GST Services</h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Ensure your business operates smoothly with our end-to-end compliance solutions. From GST filing to regulatory audits, we keep you compliant and worry-free.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Staying Compliant Made Easy</h2>
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
                                <span className="font-medium text-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Our Compliance Services:</h3>
                    <ul className="space-y-3">
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">GST Registration & Monthly Returns</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">ROC & Company Law Compliance</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">TDS/TCS Returns & Advisory</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Payroll & Labor Law Compliance</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Internal & Statutory Audits</li>
                    </ul>
                </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,168,94,0.15),transparent_50%)]"></div>
                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Simplify Your Compliance Today</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Let us handle the red tape so you can focus on building your business. Contact us for a comprehensive compliance checkup.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md px-6 h-11 text-base font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: '#C6A85E' }}>Get Compliant</Link>
                </div>
            </div>
        </div>
    );
}
