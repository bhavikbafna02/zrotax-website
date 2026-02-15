import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter">Zrotax</h3>
                        <p className="text-sm text-primary-foreground/80 max-w-xs">
                            Your trusted partner for comprehensive financial, tax, and business advisory solutions.
                            Simplifying compliance, maximizing growth.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/services/tax-planning" className="hover:text-accent transition-colors">
                                    Tax Planning
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/business-advisory" className="hover:text-accent transition-colors">
                                    Business Advisory
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/compliance-gst" className="hover:text-accent transition-colors">
                                    Compliance & GST
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-accent transition-colors">
                                    All Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-accent transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-accent transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-accent transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-accent transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                                <span>123 Financial District, Business Hub, Mumbai, India - 400001</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 shrink-0 text-accent" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 shrink-0 text-accent" />
                                <span>contact@zrotax.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
                    © {new Date().getFullYear()} Zrotax. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
