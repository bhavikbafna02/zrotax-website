import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Wallet, FileText, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="container relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left lg:justify-between">
          <div className="space-y-6 lg:max-w-2xl">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium border border-primary/20">
              Trusted by 5000+ Professionals
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-foreground">
              Expert Tax Filing for <span className="text-ring">RSU & ESPP</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We specialize in Indian & International Taxation, Capital Gains, and Foreign Asset Reporting (FA Schedule). Get accurate computations and hassle-free filing.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-ring text-white hover:bg-ring/90">
                <Link href="/contact">
                  Start Filing Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border">
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-ring" /> Accurate FTC Claim</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-ring" /> Form 67 Filing</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-ring" /> FEMA Compliance</div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="relative w-full max-w-lg aspect-square bg-muted/30 rounded-full flex items-center justify-center border border-border/50 shadow-2xl">
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
              <div className="text-center space-y-2 p-8 bg-card/80 backdrop-blur rounded-2xl border border-border shadow-lg max-w-sm">
                <h3 className="text-2xl font-bold text-foreground">₹1.5 Crores+</h3>
                <p className="text-muted-foreground text-sm">Taxes Saved for Clients</p>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden mt-4">
                  <div className="bg-gradient-to-r from-primary to-ring h-full w-[85%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-ring">5000+</h3>
            <p className="text-muted-foreground font-medium">Returns Filed</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-ring">500+</h3>
            <p className="text-muted-foreground font-medium">Active Subscriptions</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-ring">5000+</h3>
            <p className="text-muted-foreground font-medium">Satisfied Clients</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-ring">150+</h3>
            <p className="text-muted-foreground font-medium">Lakhs Taxes Saved</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32">
        <div className="container text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Why Choose Zrotax?</h2>
            <p className="text-muted-foreground text-lg">
              We tailored our solutions to align with your personal financial goals, from securing your family's future to realizing your dream home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                desc: "Our team brings a wealth of experience, providing expert insights into complex taxation.",
                icon: Users
              },
              {
                title: "Tailored Solutions",
                desc: "Every financial journey is unique. We personalize strategies to align with your aspirations.",
                icon: TrendingUp
              },
              {
                title: "Complete Transparency",
                desc: "We believe in transparent communication to build long-term trust and confidence.",
                icon: FileText
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 space-y-4 text-left">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="bg-card rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden border border-border shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,168,94,0.15),transparent_50%)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Financial Goals, Our Passion.</h2>
              <p className="text-muted-foreground text-lg">
                Ready to simplify your taxes and optimize your wealth? Connect with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button asChild size="lg" className="bg-ring text-white hover:bg-ring/90 font-bold px-8 h-12 border-none">
                  <Link href="/contact">Book An Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-accent h-12">
                  <Link href="https://wa.me/918380894711" target="_blank">Chat on WhatsApp</Link>
                </Button>
              </div>
            </div>
            {/* Abstract background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-ring/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
