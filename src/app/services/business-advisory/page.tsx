import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function BusinessAdvisoryPage() {
    return (
        <div className="container py-12 md:py-24 space-y-16">
            <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-ring transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <Link href="/services" className="hover:text-ring transition-colors">Services</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="font-medium text-foreground">Business Advisory</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">Strategic Business Advisory</h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Unlock your business's full potential with our tailored advisory services. We go beyond the numbers to provide actionable insights for sustainable growth.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Driving Business Growth</h2>
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
                                <span className="font-medium text-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Our Advisory Services Include:</h3>
                    <ul className="space-y-3">
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Business Valuation & Due Diligence</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Financial Modeling & Forecasting</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Startup Consulting & Incubation</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Process Optimization & Restructuring</li>
                        <li className="p-3 bg-muted/50 rounded-lg border border-border text-foreground">Feasibility Studies</li>
                    </ul>
                </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,168,94,0.15),transparent_50%)]"></div>
                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Ready to Scale Your Business?</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Partner with Zrotax for expert guidance on your growth journey. Let's build a roadmap to success together.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md px-6 h-11 text-base font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: '#C6A85E' }}>Get in Touch</Link>
                </div>
            </div>
        </div>
    );
}
