"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDown, Quote, Sparkles, AlertTriangle, CheckCircle2, IndianRupee, Building2, Laptop, Briefcase, Frown, Brain, Globe, MessageSquare, Zap, FileText, Banknote, CircleAlert, type LucideIcon } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

/* ── Interactive "What describes you" quiz ── */
const personas = [
  {
    id: "salaried",
    icon: Building2,
    title: "Salaried with RSUs",
    tagline: "Got RSUs from your company? Vesting, selling, double taxation — it's a maze.",
    pain: 'You received RSUs. They vested. You sold some. Now the IT department wants you to report them as perquisites AND capital gains. Your CA says "just pay the tax." You know there\'s a better way.',
    solution: "We'll compute your exact FTC credit, file Form 67, report Foreign Assets correctly, and save you from paying tax twice on the same income.",
    savings: "Avg. ₹1.2L saved per client",
    color: "#3B82F6",
  },
  {
    id: "freelancer",
    icon: Laptop,
    title: "Freelancer / Consultant",
    tagline: "Invoicing abroad? GST on exports? LUT letters? Yeah, it's complicated.",
    pain: "You freelance for a US/UK client. You're not sure if you need GST registration. You definitely don't know what an LUT is. And TDS? Nobody told you about advance tax.",
    solution: "We handle your GST registration, LUT filing, advance tax calculations, and ITR filing — so you can focus on actually doing your work.",
    savings: "Zero surprises at filing time",
    color: "#10B981",
  },
  {
    id: "founder",
    icon: Briefcase,
    title: "Startup Founder",
    tagline: "ESOPs, FEMA, angel tax — founder tax is a different beast.",
    pain: "You raised funding. You have ESOPs. Maybe some foreign shareholders. Your accountant is still figuring out Section 56(2)(viib). You need someone who speaks startup.",
    solution: "From ESOP taxation to FEMA compliance to angel tax exemptions — we've worked with 200+ startups and know the drill inside out.",
    savings: "Peace of mind, guaranteed",
    color: "#8B5CF6",
  },
];

/* ── Testimonial data ── */
const testimonials = [
  {
    name: "Rahul M.",
    role: "Software Engineer at Google",
    image: "/testimonial-rahul.png",
    quote: "I was literally Googling 'RSU tax India' at 2 AM when I found Zrotax. They saved me ₹1.8 lakhs in double taxation that my previous CA didn't even know about.",
    rotation: "-1.5deg",
  },
  {
    name: "Priya S.",
    role: "Founder, DesignCraft Studio",
    image: "/testimonial-priya.png",
    quote: "As a freelancer turned founder, my taxes went from 'complicated' to 'what language is this?' Zrotax didn't just file my returns — they explained everything in actual human words.",
    rotation: "1deg",
  },
  {
    name: "Amit K.",
    role: "Product Manager at Microsoft",
    image: "/testimonial-amit.png",
    quote: "Form 67, FA Schedule, DTAA benefits — I didn't know any of these existed. Zrotax handled it all and I got a ₹2.3 lakh refund I never expected.",
    rotation: "-0.5deg",
  },
];

/* ── The "real talk" problems list ── */
const realProblems: { icon: LucideIcon; text: string }[] = [
  { icon: Frown, text: "Your CA says 'just pay the tax' without exploring FTC claims" },
  { icon: CircleAlert, text: "ESPP taxation feels like it needs a PhD to understand" },
  { icon: AlertTriangle, text: "You've been paying tax TWICE on RSU income (India + abroad)" },
  { icon: FileText, text: "Form 67 and Foreign Asset Schedule? Never heard of them" },
  { icon: Banknote, text: "You got a notice from the IT department and panicked" },
  { icon: Frown, text: "Your accountant treats RSUs like 'just salary'" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [activePersona, setActivePersona] = useState(0);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION — Problem-first, human, relatable
      ═══════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative overflow-hidden bg-background pt-8 pb-20 lg:pt-12 lg:pb-32">
        {/* Organic background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-ring/[0.06] blob-shape blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/[0.04] blob-shape blur-3xl" style={{ animationDelay: "-4s" }} />
          {/* Dot pattern */}
          <div className="absolute inset-0 dot-pattern text-foreground" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="container relative z-10"
        >
          {/* Handwritten annotation above headline */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 lg:mb-8"
          >
            <span className="inline-block text-lg md:text-xl annotation px-1" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
              ↓ real talk, no jargon
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
            {/* Left — The bold headline */}
            <div className="space-y-6 lg:max-w-[55%]">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[2.5rem] leading-[1.1] font-extrabold tracking-tight sm:text-5xl xl:text-[4.2rem] text-foreground"
              >
                Your RSUs vested.{" "}
                <br className="hidden sm:block" />
                Your CA is{" "}
                <span className="highlight-stroke">confused.</span>{" "}
                <br className="hidden sm:block" />
                <span className="text-ring">We&apos;re not.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl"
              >
                We help tech professionals, freelancers, and founders navigate RSU/ESPP taxation, capital gains, and international tax compliance — without the usual headaches.
              </motion.p>

              {/* Imperfect stat callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="inline-flex items-center gap-3 bg-ring/[0.08] border border-ring/20 rounded-xl px-5 py-3 card-imperfect-subtle"
              >
                <IndianRupee className="h-5 w-5 text-ring" />
                <div>
                  <p className="text-sm font-bold text-foreground">₹1.5 Cr+ saved for our clients</p>
                  <p className="text-xs text-muted-foreground">in wrongly paid taxes & double taxation</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex flex-col min-[400px]:flex-row gap-4 pt-2"
              >
                <Link
                  href="/contact"
                  className="btn-human inline-flex items-center justify-center gap-2 rounded-xl px-7 h-13 text-base font-bold text-white shadow-lg"
                  style={{ backgroundColor: '#C6A85E' }}
                >
                  Talk to a human <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-human-outline inline-flex items-center justify-center gap-2 rounded-xl px-7 h-13 text-base font-semibold border-2 border-border text-foreground bg-card"
                >
                  See how we help
                </Link>
              </motion.div>

              {/* Social proof strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-6 flex items-center gap-4"
              >
                {/* Stacked avatars */}
                <div className="flex -space-x-3">
                  {["/testimonial-rahul.png", "/testimonial-priya.png", "/testimonial-amit.png"].map((src, i) => (
                    <div key={i} className="h-9 w-9 rounded-full border-2 border-background overflow-hidden shadow-sm">
                      <Image src={src} alt="Client" width={36} height={36} className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">5000+</span> professionals trust us with their taxes
                </p>
              </motion.div>
            </div>

            {/* Right — Hero image with organic shape + floating annotation */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block lg:w-[40%] relative"
            >
              <div className="relative">
                {/* Doodle circle behind */}
                <div className="absolute -top-8 -left-8 w-full h-full doodle-circle" />
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border" style={{ transform: 'rotate(1.5deg)' }}>
                  <Image
                    src="/hero-person.png"
                    alt="A real person working on their taxes"
                    width={520}
                    height={520}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Floating annotation card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-6 -left-8 bg-card border border-border rounded-xl px-5 py-3 shadow-xl"
                  style={{ transform: 'rotate(-3deg)' }}
                >
                  <p className="text-sm font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Form 67 filed
                  </p>
                  <p className="text-xs text-muted-foreground">FTC claimed successfully</p>
                </motion.div>
                {/* Another floating annotation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 -right-6 bg-card border border-border rounded-xl px-4 py-2 shadow-xl"
                  style={{ transform: 'rotate(2deg)' }}
                >
                  <p className="text-xs font-bold text-green-600 dark:text-green-400">↑ ₹1.8L saved</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden lg:flex justify-center pt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-muted-foreground/50"
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          "SOUND FAMILIAR?" — Pain point section
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern text-foreground" />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-ring mb-4 block">Sound familiar?</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                Tax season shouldn&apos;t feel like{" "}
                <span className="highlight-stroke">a horror movie.</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl">
                If any of these hit close to home, you&apos;re in the right place.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {realProblems.map((problem, i) => (
              <StaggerItem key={i}>
                <div
                  className={`group p-5 rounded-2xl border border-border bg-card hover:border-ring/30 transition-all duration-300 cursor-default ${
                    i % 3 === 0 ? 'card-imperfect' : i % 3 === 1 ? 'card-imperfect-right' : 'card-imperfect-subtle'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <problem.icon className="h-6 w-6 shrink-0 mt-0.5 text-ring" />
                    <p className="text-foreground font-medium leading-relaxed">{problem.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Handwritten "we fix all of this" */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-px flex-1 max-w-[60px] bg-ring/30" />
              <span className="text-xl annotation" style={{ fontFamily: 'var(--font-caveat), cursive', transform: 'rotate(-1.5deg)', display: 'inline-block' }}>
                ^ we fix all of this
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          "WHO IS THIS FOR?" — Interactive persona section
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-ring mb-4 block">Who is this for?</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                Tell us who you are.{" "}
                <br className="hidden sm:block" />
                We&apos;ll tell you <span className="text-ring">what to do.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Persona selector tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {personas.map((persona, i) => (
                <button
                  key={persona.id}
                  onClick={() => setActivePersona(i)}
                  className={`group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activePersona === i
                      ? 'bg-foreground text-background shadow-lg scale-[1.02]'
                      : 'bg-card border border-border text-foreground hover:border-ring/30 btn-human-outline'
                  }`}
                >
                  <persona.icon className="h-4 w-4" />
                  {persona.title}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Persona detail card — asymmetric layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePersona}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-start">
                {/* Problem side */}
                <div className="p-8 rounded-2xl border border-border bg-card card-imperfect space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-500 dark:text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    The problem
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{personas[activePersona].tagline}</h3>
                  <p className="text-muted-foreground leading-relaxed">{personas[activePersona].pain}</p>
                </div>

                {/* Solution side */}
                <div className="p-8 rounded-2xl border-2 border-ring/20 bg-ring/[0.04] card-imperfect-right space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                    <Sparkles className="h-4 w-4" />
                    How we help
                  </div>
                  <p className="text-foreground leading-relaxed font-medium">{personas[activePersona].solution}</p>
                  <div className="pt-2 flex items-center gap-3">
                    <div className="h-px flex-1 bg-ring/20" />
                    <span className="text-sm font-bold text-ring">{personas[activePersona].savings}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-human inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white mt-2"
                    style={{ backgroundColor: '#C6A85E' }}
                  >
                    Get started <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY US — Not the typical 3-column grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-ring mb-4 block">Why Zrotax?</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  Because your taxes deserve{" "}
                  <span className="highlight-stroke">better than &ldquo;good enough.&rdquo;</span>
                </h2>
              </div>
              <p className="annotation text-xl lg:text-2xl self-end" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                (spoiler: we&apos;re kind of obsessed) →
              </p>
            </div>
          </ScrollReveal>

          {/* Asymmetric bento-style grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScrollReveal delay={0} className="lg:row-span-2">
              <div className="h-full p-8 rounded-2xl border border-border bg-card card-imperfect space-y-5">
                <div className="h-14 w-14 rounded-2xl flex items-center justify-center bg-blue-500/10" style={{ transform: 'rotate(-3deg)' }}>
                  <Brain className="h-7 w-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">We actually understand RSUs.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not &ldquo;oh yeah, we can figure it out.&rdquo; We mean we&apos;ve filed <span className="font-bold text-foreground">5000+ returns</span> specifically for tech professionals with equity compensation. We know the difference between RSU vesting and ESPP purchase dates because we do this every single day.
                </p>
                <div className="pt-2">
                  <span className="annotation text-lg" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                    — not ChatGPT copy-pasting ITR forms
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-7 rounded-2xl border border-border bg-card card-imperfect-right space-y-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-green-500/10" style={{ transform: 'rotate(2deg)' }}>
                  <Globe className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground">International tax? We speak it fluently.</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  DTAA benefits, Foreign Tax Credit, FA Schedule, FEMA compliance — we handle the alphabet soup so you don&apos;t have to.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="p-7 rounded-2xl border border-border bg-card card-imperfect-subtle space-y-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-amber-500/10" style={{ transform: 'rotate(-1deg)' }}>
                  <MessageSquare className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground">We explain things like humans.</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  No jargon-filled PDFs. No &ldquo;as per Section 115E(2)...&rdquo; responses. We talk to you like a smart friend who happens to be a CA.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-7 rounded-2xl border-2 border-ring/20 bg-ring/[0.04] card-imperfect space-y-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center text-2xl bg-ring/10" style={{ transform: 'rotate(1.5deg)' }}>
                  ₹
                </div>
                <h3 className="text-xl font-extrabold text-foreground">We save real money. Not &ldquo;maybe.&rdquo;</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  ₹1.5 Cr+ saved across clients by properly claiming FTC, optimizing capital gains, and catching errors previous CAs missed.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="p-7 rounded-2xl border border-border bg-card card-imperfect-right space-y-4">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-purple-500/10" style={{ transform: 'rotate(-2deg)' }}>
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground">Fast. Responsive. Actually available.</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  WhatsApp support. Quick turnarounds. No ghosting after you pay. We&apos;re here when you need us — especially during panic season (March, obviously).
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS — Real people, real stories
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-ring mb-4 block">Real People, Real Savings</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                Don&apos;t take our word for it.
              </h2>
              <p className="mt-3 annotation text-xl" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                (take theirs instead)
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="relative p-7 rounded-2xl border border-border bg-card space-y-5 h-full"
                  style={{ transform: `rotate(${t.rotation})`, transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${t.rotation})`)}
                >
                  <Quote className="h-8 w-8 text-ring/30" />
                  <p className="text-foreground leading-relaxed font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-ring/20 shadow-sm">
                      <Image src={t.image} alt={t.name} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TEAM SECTION — Authentic faces
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-ring mb-4 block">The Humans Behind Zrotax</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                We&apos;re not a faceless firm.{" "}
                <span className="highlight-stroke">We&apos;re real people</span> who genuinely care about your money.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl">
            {[
              { name: "Pranay Bafna", role: "Founder & CA", image: "/team/pranay.png", bio: "CA who left the 'safe' job to build something that actually helps people with taxes." },
              { name: "Neha", role: "Tax Operations Lead", image: "/team/neha.png", bio: "The one who makes sure every Form 67 and FA Schedule is filed perfectly." },
              { name: "Bhavik Bafna", role: "Tech & Strategy", image: "/team/bhavik.png", bio: "Building the tech that makes tax filing feel less like pulling teeth." },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className={`space-y-4 ${i === 1 ? 'card-imperfect-right' : i === 0 ? 'card-imperfect' : 'card-imperfect-subtle'}`}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-lg">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-foreground">{member.name}</h3>
                    <p className="text-sm font-semibold text-ring">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SIMPLE NEXT-STEP FLOW
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-ring mb-4 block">How it works</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                Three steps. Zero stress.
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {[
              {
                step: "01",
                title: "Tell us your situation",
                desc: "Book a quick call or send us a WhatsApp message. We'll ask the right questions — not a 50-field form.",
                annotation: "takes 5 minutes",
              },
              {
                step: "02",
                title: "We do the heavy lifting",
                desc: "We compute your taxes, claim all eligible credits, prepare your schedules, and handle the nitty-gritty details.",
                annotation: "you sip chai",
              },
              {
                step: "03",
                title: "Review, approve, done",
                desc: "We walk you through everything in plain English (or Hindi — your call). You approve, we file. That's it.",
                annotation: "seriously, that's it",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`flex items-start gap-6 ${i < 2 ? 'pb-10 mb-10 border-b border-border/50' : ''}`}>
                  <div className="shrink-0 h-14 w-14 rounded-2xl bg-ring/10 flex items-center justify-center text-ring font-extrabold text-lg" style={{ transform: `rotate(${i % 2 === 0 ? '-2' : '2'}deg)` }}>
                    {item.step}
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-extrabold text-foreground">{item.title}</h3>
                      <span className="annotation text-sm hidden sm:inline" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                        — {item.annotation}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION — Warm, personal
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <ScrollReveal>
            <div
              className="relative rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl border border-ring/20"
              style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #163357 50%, #1a3a5c 100%)' }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A85E]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#C6A85E]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
              <div className="absolute inset-0 dot-pattern text-white" />

              <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-[#C6A85E] text-lg annotation"
                  style={{ fontFamily: 'var(--font-caveat), cursive' }}
                >
                  okay, one last thing
                </motion.p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Stop overpaying taxes.{" "}
                  <br className="hidden sm:block" />
                  Start with a conversation.
                </h2>
                <p className="text-white/60 text-lg max-w-lg mx-auto">
                  No pushy sales call. No commitment. Just a quick chat to see if we can actually help you save money.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Link
                    href="/contact"
                    className="btn-human inline-flex items-center justify-center rounded-xl px-8 h-13 text-base font-bold text-[#0B1F3A] shadow-lg"
                    style={{ backgroundColor: '#C6A85E' }}
                  >
                    Book a Free Call
                  </Link>
                  <Link
                    href="https://wa.me/918380894711"
                    target="_blank"
                    className="btn-human-outline inline-flex items-center justify-center rounded-xl px-8 h-13 text-base font-medium text-white border border-white/20 hover:bg-white/10"
                  >
                    Or just WhatsApp us →
                  </Link>
                </div>
                <p className="text-white/40 text-sm pt-2">
                  Typically replies within 2 hours. Even on weekends. {"¯\\_(ツ)_/¯"}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
