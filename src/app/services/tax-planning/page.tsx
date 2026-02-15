import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function TaxPlanningPage() {
    return (
        <div className="container py-12 md:py-24 space-y-16">
            <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-ring transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <Link href="/services" className="hover:text-ring transition-colors">Services</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="font-medium text-foreground">Tax Planning</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">Strategic Tax Planning</h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Navigate the complexities of tax laws with our expert guidance. Optimize your tax position, ensure compliance, and maximize your savings legitimately.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Why Tax Planning Matters</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Effective tax planning is not just about saving money; it's about making informed financial decisions that align with your business goals. Our proactive approach helps you anticipate tax liabilities and leverage available deductions.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Minimize Tax Liability Legally",
                            "Avoid Penalties and Interest",
                            "Optimize Cash Flow",
                            "Plan for Future Growth",
                            "Stay Compliant with Changing Regulations"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-ring shrink-0" />
                                <span className="font-medium text-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Our Tax Services Include:</h3>
                    <ul className="space-y-3">
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Corporate Tax Planning & Filing</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Individual Income Tax Solutions</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">International Taxation Advisory</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Transfer Pricing Studies</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Tax Dispute Resolution</li>
                    </ul>
                </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,168,94,0.15),transparent_50%)]"></div>
                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Ready to Optimize Your Taxes?</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don't let tax complexities hold your business back. Schedule a consultation with our tax experts today.
                    </p>
                    <Button asChild size="lg" className="bg-ring text-white hover:bg-ring/90 font-semibold">
                        <Link href="/contact">Schedule a Consultation</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
