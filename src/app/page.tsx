"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Users, FileText } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, ParallaxSection, FloatingElement, HoverCard } from "@/components/ui/scroll-animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative overflow-hidden bg-background py-20 lg:py-32">
        {/* Subtle animated background elements */}
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
          className="container relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left lg:justify-between"
        >
          <div className="space-y-6 lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium border border-primary/20"
            >
              Trusted by 5000+ Professionals
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-foreground"
            >
              Expert Tax Filing for <span className="text-ring">RSU & ESPP</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              We specialize in Indian & International Taxation, Capital Gains, and Foreign Asset Reporting (FA Schedule). Get accurate computations and hassle-free filing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="bg-ring text-white hover:bg-ring/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <Link href="/contact">
                  Start Filing Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:border-ring/50 transition-all duration-300 hover:-translate-y-0.5">
                <Link href="/services">View Services</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground font-medium"
            >
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-ring" /> Accurate FTC Claim</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-ring" /> Form 67 Filing</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-ring" /> FEMA Compliance</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center lg:w-1/2"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-border/50 shadow-2xl bg-muted/20" />
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner card */}
              <FloatingElement className="absolute inset-0 flex items-center justify-center" duration={5} distance={8}>
                <div className="text-center space-y-2 p-8 bg-card/90 backdrop-blur-md rounded-2xl border border-border shadow-xl max-w-sm">
                  <h3 className="text-2xl font-bold text-foreground">₹1.5 Crores+</h3>
                  <p className="text-muted-foreground text-sm">Taxes Saved for Clients</p>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden mt-4">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-ring h-full rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </FloatingElement>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <StaggerContainer className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.15}>
          {[
            { value: "5000+", label: "Returns Filed" },
            { value: "500+", label: "Active Subscriptions" },
            { value: "5000+", label: "Satisfied Clients" },
            { value: "150+", label: "Lakhs Taxes Saved" },
          ].map((stat, i) => (
            <StaggerItem key={i}>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-ring">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Why Choose Us with Parallax */}
      <ParallaxSection speed={0.15} className="py-20 lg:py-32">
        <div className="container text-center space-y-12">
          <ScrollReveal>
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Why Choose Zrotax?</h2>
              <p className="text-muted-foreground text-lg">
                We tailored our solutions to align with your personal financial goals, from securing your family&apos;s future to realizing your dream home.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
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
              <StaggerItem key={i}>
                <HoverCard>
                  <div className="group p-8 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 space-y-4 text-left hover:shadow-lg">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-ring/15 transition-all duration-300">
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
            <div className="bg-card rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden border border-border shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,168,94,0.15),transparent_50%)]"></div>
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Financial Goals, Our Passion.</h2>
                <p className="text-muted-foreground text-lg">
                  Ready to simplify your taxes and optimize your wealth? Connect with our experts today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button asChild size="lg" className="bg-ring text-white hover:bg-ring/90 font-bold px-8 h-12 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    <Link href="/contact">Book An Appointment</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-accent h-12 transition-all duration-300 hover:-translate-y-0.5">
                    <Link href="https://wa.me/918380894711" target="_blank">Chat on WhatsApp</Link>
                  </Button>
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-ring/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
