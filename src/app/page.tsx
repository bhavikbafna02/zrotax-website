"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Users, FileText, Shield, Globe, Calculator, BarChart3 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, ParallaxSection, HoverCard } from "@/components/ui/scroll-animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ── SVG logos for client companies ── */
function MicrosoftLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 23 23" fill="none">
      <rect width="11" height="11" fill="#F25022" />
      <rect x="12" width="11" height="11" fill="#7FBA00" />
      <rect y="12" width="11" height="11" fill="#00A4EF" />
      <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
    </svg>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.39 4.81C17.03 4.84 18.83 5.06 19.97 6.75C19.86 6.82 17.55 8.15 17.58 10.89C17.62 14.17 20.52 15.27 20.55 15.28C20.52 15.37 20.07 16.9 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );
}

function AmazonLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 603 182" fill="currentColor">
      <path d="M374.0 142.1c-36.5 26.9-89.4 41.3-134.9 41.3C156.7 183.4 84.0 155.6 28.7 109.3c-5.0-4.5-.5-10.7 5.5-7.2C95.2 134.5 167.3 153.5 242.4 153.5c50.6 0 106.3-10.5 157.5-32.2C407.7 117.9 414.0 132.8 374.0 142.1z" />
      <path d="M389.0 125.0c-6.8-8.7-45.0-4.1-62.2-2.1-5.2.6-6.0-3.9-1.3-7.2C352.1 96.2 399.2 101.4 405.0 108.6c5.8 7.2-1.5 57.3-25.3 81.2-3.6 3.6-7.1 1.7-5.5-3.1C379.5 172.0 395.8 133.7 389.0 125.0z" />
      <path d="M328.2 21.3V6.6c0-2.2 1.7-3.7 3.7-3.7h65.4c2.1 0 3.8 1.5 3.8 3.7V19.0c0 2.1-1.8 4.9-5.0 9.2l-33.9 48.4c12.6-.3 25.9 1.6 37.3 8.0 2.6 1.5 3.3 3.6 3.5 5.7v15.7c0 2.2-2.4 4.7-4.9 3.4-20.3-10.7-47.3-11.8-69.8.1-2.3 1.2-4.7-1.2-4.7-3.4V91.0c0-2.4 0-6.5 2.5-10.2l39.3-56.4h-34.2C329.9 24.4 328.2 23.5 328.2 21.3z" />
    </svg>
  );
}

function MetaLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="currentColor">
      <path d="M7.44 15.68C7.44 14.14 7.78 12.8 8.38 11.82C9.52 9.94 11.42 8.86 13.74 8.86C16.3 8.86 18.16 10.22 20.04 12.88C21.7 10.04 23.82 8.86 26.1 8.86C28.14 8.86 29.78 9.66 30.96 11.16C32.28 12.84 32.88 15.08 32.88 17.68C32.88 22.68 30.18 27.24 27.06 27.24C25.38 27.24 23.94 26.16 22.62 24.18L20.04 19.92C17.58 24.42 16 27.24 13.02 27.24C9.78 27.24 7.44 22.14 7.44 15.68ZM17.04 17.22L14.4 12.88C12.84 10.4 12.06 10.34 11.76 10.34C10.32 10.34 9.24 13.38 9.24 16.36C9.24 19.96 10.5 22.38 12.24 22.38C13.32 22.38 14.34 21.12 17.04 17.22ZM24.9 17.22L22.44 12.88C21 10.4 20.22 10.34 19.92 10.34C19.62 10.34 19.26 10.52 18.6 11.5L21.72 17.22C23.52 20.34 24.12 21.12 24.78 21.12C25.68 21.12 26.94 19.68 27.42 17.64C27.54 17.16 27.6 16.68 27.6 16.2C27.6 13.14 26.28 10.34 24.6 10.34C24.3 10.34 23.46 10.4 21.9 12.88L24.9 17.22Z" />
    </svg>
  );
}

function UberLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 137 24" fill="currentColor">
      <path d="M49.28 0v15.04c0 2.56-2.08 4.64-4.64 4.64s-4.64-2.08-4.64-4.64V0h-4.16v15.04c0 4.83 3.97 8.8 8.8 8.8s8.8-3.97 8.8-8.8V0h-4.16zM62.56 0h-4.16v23.2h4.16v-6.08h8.96c4.16 0 4.16-4.16 4.16-4.16V4.16S75.68 0 71.52 0h-8.96zm0 4.16h8.96v8.96h-8.96V4.16zM88.64 0H80v23.2h4.16V16h4.48c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 11.84H84.16V4.16h4.48c2.12 0 3.84 1.72 3.84 3.84s-1.72 3.84-3.84 3.84zM109.12 0h-12.8v23.2h12.8c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm3.84 15.2c0 2.12-1.72 3.84-3.84 3.84h-8.64V4.16h8.64c2.12 0 3.84 1.72 3.84 3.84v7.2z" />
    </svg>
  );
}

/* ── Company data with SVG logos ── */
const companies = [
  { name: "Microsoft", Logo: MicrosoftLogo },
  { name: "Google", Logo: GoogleLogo },
  { name: "Apple", Logo: AppleLogo },
  { name: "Amazon", Logo: AmazonLogo },
  { name: "Meta", Logo: MetaLogo },
  { name: "Uber", Logo: UberLogo },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-background py-20 lg:py-28">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-ring/5 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 left-[5%] w-96 h-96 rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative z-10 flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left lg:justify-between"
        >
          {/* Left — Copy */}
          <div className="space-y-6 lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block rounded-full bg-ring/10 px-4 py-1.5 text-sm font-semibold border border-ring/20"
              style={{ color: '#C6A85E' }}
            >
              ★ Trusted by 5000+ Professionals
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-foreground"
            >
              Expert Tax Filing for{" "}
              <span className="bg-gradient-to-r from-[#C6A85E] to-[#E8D5A3] bg-clip-text text-transparent">
                RSU &amp; ESPP
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              We specialize in Indian &amp; International Taxation, Capital Gains, and Foreign Asset Reporting (FA Schedule). Get accurate computations and hassle-free filing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-7 h-12 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: '#C6A85E' }}
              >
                Start Filing Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:border-ring/50 transition-all duration-300 hover:-translate-y-0.5 h-12 rounded-lg">
                <Link href="/services">View Services</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 flex flex-wrap gap-5 justify-center lg:justify-start text-sm text-muted-foreground font-medium"
            >
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-ring" /> Accurate FTC Claim</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-ring" /> Form 67 Filing</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-ring" /> FEMA Compliance</div>
            </motion.div>
          </div>

          {/* Right — Dashboard-style highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:w-[45%]"
          >
            <div className="relative">
              {/* Main highlight card */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-ring/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: '#C6A85E' }}>
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Total Tax Savings</p>
                        <h3 className="text-3xl font-bold text-foreground">₹1.5 Cr+</h3>
                      </div>
                    </div>
                    <div className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                      ↑ 32% YoY
                    </div>
                  </div>

                  {/* Mini stat cards */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Users, label: "Active Clients", value: "5000+", color: "#C6A85E" },
                      { icon: FileText, label: "ITRs Filed", value: "5000+", color: "#3B82F6" },
                      { icon: Shield, label: "FTC Claims", value: "100%", color: "#10B981" },
                      { icon: Globe, label: "Countries", value: "15+", color: "#8B5CF6" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="p-4 rounded-xl bg-muted/50 border border-border/50 space-y-1.5 hover:border-ring/30 transition-colors"
                      >
                        <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ backgroundColor: stat.color + '15', color: stat.color }}>
                          <stat.icon className="h-4 w-4" />
                        </div>
                        <p className="text-lg font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-5 space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>FY 2024-25 Goal</span>
                      <span className="font-semibold text-foreground">85%</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #C6A85E, #E8D5A3)' }}
                        initial={{ width: "0%" }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl bg-card border border-border shadow-lg flex items-center gap-2"
              >
                <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C6A85E' }}>
                  <Calculator className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">500+</p>
                  <p className="text-[10px] text-muted-foreground">Active Subscriptions</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted By / Worked With Clients From */}
      <section className="py-14 border-y border-border bg-muted/30 overflow-hidden">
        <div className="container mb-8">
          <ScrollReveal>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Worked with clients from
            </p>
          </ScrollReveal>
        </div>

        {/* Infinite marquee */}
        <div className="relative">
          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/60 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {/* Double the logos for seamless loop */}
            {[...companies, ...companies].map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                <company.Logo className="h-7 w-7 shrink-0 text-foreground/70" />
                <span className="text-xl font-bold text-foreground/70 whitespace-nowrap tracking-tight">{company.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <StaggerContainer className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.15}>
          {[
            { value: "5000+", label: "Returns Filed", icon: FileText },
            { value: "500+", label: "Active Subscriptions", icon: Users },
            { value: "5000+", label: "Satisfied Clients", icon: CheckCircle2 },
            { value: "₹1.5Cr+", label: "Taxes Saved", icon: TrendingUp },
          ].map((stat, i) => (
            <StaggerItem key={i}>
              <div className="space-y-3">
                <div className="h-12 w-12 mx-auto rounded-xl flex items-center justify-center bg-ring/10">
                  <stat.icon className="h-5 w-5 text-ring" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{stat.value}</h3>
                <p className="text-muted-foreground font-medium text-sm">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Why Choose Us */}
      <ParallaxSection speed={0.15} className="py-20 lg:py-28">
        <div className="container text-center space-y-12">
          <ScrollReveal>
            <div className="space-y-4 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block rounded-full bg-ring/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] mb-2"
                style={{ color: '#C6A85E' }}
              >
                Why Choose Us
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Why Choose Zrotax?</h2>
              <p className="text-muted-foreground text-lg">
                We tailored our solutions to align with your personal financial goals, from securing your family&apos;s future to realizing your dream home.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {[
              {
                title: "Expert Guidance",
                desc: "Our team brings a wealth of experience, providing expert insights into complex taxation.",
                icon: Users,
                gradient: "from-blue-500/10 to-indigo-500/10"
              },
              {
                title: "Tailored Solutions",
                desc: "Every financial journey is unique. We personalize strategies to align with your aspirations.",
                icon: TrendingUp,
                gradient: "from-amber-500/10 to-orange-500/10"
              },
              {
                title: "Complete Transparency",
                desc: "We believe in transparent communication to build long-term trust and confidence.",
                icon: FileText,
                gradient: "from-emerald-500/10 to-teal-500/10"
              }
            ].map((feature, i) => (
              <StaggerItem key={i}>
                <HoverCard>
                  <div className={`group p-8 rounded-2xl border border-border bg-gradient-to-br ${feature.gradient} hover:shadow-xl transition-all duration-300 space-y-4 text-left h-full`}>
                    <div className="h-12 w-12 rounded-xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: '#C6A85E' }}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <div className="rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl border border-ring/20" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #163357 50%, #1a3a5c 100%)' }}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A85E]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#C6A85E]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Your Financial Goals, Our Passion.</h2>
                <p className="text-white/70 text-lg">
                  Ready to simplify your taxes and optimize your wealth? Connect with our experts today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg px-8 h-12 text-base font-bold text-[#0B1F3A] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{ backgroundColor: '#C6A85E' }}
                  >
                    Book An Appointment
                  </Link>
                  <Link
                    href="https://wa.me/918380894711"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-lg px-8 h-12 text-base font-medium text-white border border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
