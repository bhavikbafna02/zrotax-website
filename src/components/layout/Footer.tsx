import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container px-4 md:px-6 py-10 lg:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-4">
                            <div className="relative h-28 w-28 overflow-hidden rounded-md">
                                <Image src="/logo.png" alt="Zrotax Logo" fill className="object-contain" />
                            </div>
                            <span className="text-4xl font-bold text-primary tracking-tight">Zrotax</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We are a new-age tax and financial consultancy firm, simplifying taxes with clarity, compliance, and confidence.
                            Specializing in RSU/ESPP and International Taxation.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-ring">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-ring">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-ring">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 shrink-0 text-primary" />
                                <span>
                                    Guruganesh Residency, Kirti Nagar<br />
                                    Akola 444001, Maharashtra, India
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 shrink-0 text-primary" />
                                <a href="tel:+918380894711" className="hover:text-primary transition-colors">+91 8380894711</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 shrink-0 text-primary" />
                                <a href="mailto:hi.zrotax@gmail.com" className="hover:text-primary transition-colors">hi.zrotax@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t mt-12 pt-8 gap-4 text-xs text-muted-foreground font-medium">
                    <p>© 2025 Zrotax. All rights reserved.</p>
                    <div className="flex gap-4 uppercase tracking-widest text-primary/60">
                        <span>Mumbai</span>
                        <span className="text-muted-foreground/30">|</span>
                        <span>Bangalore</span>
                        <span className="text-muted-foreground/30">|</span>
                        <span>Akola</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
