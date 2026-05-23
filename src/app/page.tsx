"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  FileText,
  Globe,
  Shield,
  Lightbulb,
  Eye,
  Quote,
  BarChart3,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

/* ── Company logos for marquee ── */
const companies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Meta",
  "Apple",
  "Uber",
  "Stripe",
  "Flipkart",
  "Infosys",
  "Wipro",
  "TCS",
  "Adobe",
];

/* ── Key stats ── */
const keyStats = [
  { icon: FileText, value: "5000+", label: "Returns Filed" },
  { icon: Users, value: "500+", label: "Active Subscriptions" },
  { icon: UserCheck, value: "5000+", label: "Satisfied Clients" },
  { icon: TrendingUp, value: "₹1.5Cr+", label: "Taxes Saved" },
];

/* ── Why Choose Us ── */
const whyChooseUs = [
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    description:
      "Our experienced CAs specialize in RSU, ESPP, DTAA, and international tax compliance. We stay updated with the latest regulations so you don't have to.",
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Shield,
    title: "Tailored Solutions",
    description:
      "Every client gets a personalized tax strategy. We analyze your specific situation — vesting schedule, country of employment, capital gains — and optimize accordingly.",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description:
      "No hidden charges, no surprise bills. We explain every line of your return in plain language and keep you informed at every step of the filing process.",
    bg: "bg-teal-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    name: "Rahul M.",
    role: "Software Engineer at Google",
    image: "/testimonial-rahul.png",
    quote:
      "I was literally Googling 'RSU tax India' at 2 AM when I found Zrotax. They saved me ₹1.8 lakhs in double taxation that my previous CA didn't even know about.",
  },
  {
    name: "Priya S.",
    role: "Founder, DesignCraft Studio",
    image: "/testimonial-priya.png",
    quote:
      "As a freelancer turned founder, my taxes went from 'complicated' to 'what language is this?' Zrotax didn't just file my returns — they explained everything in actual human words.",
  },
  {
    name: "Amit K.",
    role: "Product Manager at Microsoft",
    image: "/testimonial-amit.png",
    quote:
      "Form 67, FA Schedule, DTAA benefits — I didn't know any of these existed. Zrotax handled it all and I got a ₹2.3 lakh refund I never expected.",
  },
];

/* ── Marquee Component ── */
function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative overflow-hidden">
      <div className="marquee-track flex gap-12 items-center">
        {[...items, ...items].map((company, i) => (
          <span
            key={i}
            className="text-sm font-semibold tracking-wider text-muted-foreground/60 whitespace-nowrap uppercase shrink-0"
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-background pt-12 pb-24 lg:pt-16 lg:pb-32">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(198,168,94,0.08) 0%, transparent 70%)" }} />
          <div className="dot-pattern absolute inset-0 text-foreground" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">

            {/* Left — Hero Text */}
            <div className="flex-1 space-y-7 max-w-2xl">
              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-ring/30 bg-ring/8 px-4 py-1.5 text-sm font-semibold text-foreground">
                  <Star className="h-3.5 w-3.5 fill-ring text-ring" />
                  Trusted by 5000+ Professionals
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-extrabold leading-[1.08] tracking-tight text-foreground"
              >
                Expert Tax Filing for{" "}
                <br className="hidden sm:block" />
                <span className="text-ring">RSU &amp; ESPP</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl"
              >
                We specialize in Indian &amp; International Taxation, Capital Gains, and Foreign Asset Reporting (FA Schedule). Get accurate computations and hassle-free filing.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="btn-human inline-flex items-center justify-center gap-2 rounded-xl px-7 h-12 text-base font-bold text-white shadow-lg"
                  style={{ backgroundColor: "#C6A85E" }}
                >
                  Start Filing Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-human-outline inline-flex items-center justify-center gap-2 rounded-xl px-7 h-12 text-base font-semibold border border-border text-foreground bg-card hover:bg-muted/50 transition-colors"
                >
                  View Services
                </Link>
              </motion.div>

              {/* Checklist */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap gap-x-6 gap-y-2"
              >
                {["Accurate FTC Claim", "Form 67 Filing", "FEMA Compliance"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-ring shrink-0" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-[420px] xl:w-[460px] shrink-0"
            >
              <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
                {/* Primary stat */}
                <div className="p-6 pb-5 border-b border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Total Tax Savings</p>
                      <p className="text-4xl font-extrabold text-foreground">₹1.5 Cr+</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="h-11 w-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(198,168,94,0.12)" }}>
                        <BarChart3 className="h-5 w-5 text-ring" />
                      </div>
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400 px-2 py-1 rounded-full">
                        <TrendingUp className="h-3 w-3" /> 32% YoY
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub stats grid */}
                <div className="grid grid-cols-2 divide-x divide-y divide-border">
                  {[
                    { icon: Users, value: "5000+", label: "Active Clients", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/30" },
                    { icon: FileText, value: "5000+", label: "ITRs Filed", color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/30" },
                    { icon: Shield, value: "100%", label: "FTC Claims", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/30" },
                    { icon: Globe, value: "15+", label: "Countries", color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-950/30" },
                  ].map((stat, i) => (
                    <div key={i} className="p-5 flex flex-col gap-3">
                      <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${stat.bg}`}>
                        <stat.icon className={`h-4 w-4 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LOGO MARQUEE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-10 border-y border-border bg-muted/30">
        <div className="container mb-5">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
            Worked with clients from
          </p>
        </div>
        <Marquee items={companies} />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          KEY STATS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-12 w-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(198,168,94,0.1)" }}>
                  <stat.icon className="h-6 w-6 text-ring" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-ring/30 bg-ring/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ring mb-5"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight"
            >
              The Zrotax Difference
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto"
            >
              We combine deep tax expertise with genuine care for your financial wellbeing.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`group p-8 rounded-2xl ${item.bg} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${item.iconBg} mb-6`}>
                  <item.icon className={`h-7 w-7 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-ring/30 bg-ring/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ring mb-5"
            >
              Client Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight"
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-7 rounded-2xl border border-border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5"
              >
                <Quote className="h-7 w-7 text-ring/25 shrink-0" />
                <p className="text-foreground leading-relaxed font-medium flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-ring/20 shadow-sm shrink-0">
                    <Image src={t.image} alt={t.name} width={44} height={44} className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-6 lg:py-8 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden px-8 py-16 md:py-20 text-center"
            style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #163357 60%, #0f2744 100%)" }}
          >
            {/* Glow blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" style={{ background: "rgba(198,168,94,0.12)" }} />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" style={{ background: "rgba(198,168,94,0.08)" }} />
            <div className="absolute inset-0 dot-pattern text-white" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Your Financial Goals,{" "}
                <span className="text-ring">Our Passion.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-lg mx-auto">
                Book a free consultation and let&apos;s see how much we can save you. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                <Link
                  href="/contact"
                  className="btn-human inline-flex items-center justify-center gap-2 rounded-xl px-8 h-12 text-base font-bold shadow-lg"
                  style={{ backgroundColor: "#C6A85E", color: "#0B1F3A" }}
                >
                  Book An Appointment
                </Link>
                <Link
                  href="https://wa.me/918380894711"
                  target="_blank"
                  className="btn-human-outline inline-flex items-center justify-center gap-2 rounded-xl px-8 h-12 text-base font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-8" />
    </div>
  );
}
