"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Financial Planning",
        href: "/services",
        description: "Comprehensive financial goal setting, budgeting, and investment strategies.",
    },
    {
        title: "Tax Planning",
        href: "/services/tax-planning",
        description: "Strategic tax optimization to minimize liability and ensure compliance.",
    },
    {
        title: "GST (Export of Services)",
        href: "/services/compliance-gst",
        description: "Specialized GST compliance for freelancers and consultants exporting services.",
    },
    {
        title: "HUF Planning",
        href: "/services",
        description: "Hindu Undivided Family formation and tax benefit management.",
    },
];

// Removed duplicate import

import Image from "next/image";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-24 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-20 w-40 shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Zrotax Logo"
                            fill
                            className="object-contain brightness-0 dark:brightness-100 transition-all duration-300"
                        />
                    </div>
                    <span className="text-3xl font-bold text-foreground tracking-tight">Zrotax</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        About Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                        <ListItem title="All Services" href="/services" className="col-span-2 bg-muted/50 text-center">
                                            View all our professional services
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/blog" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Blog
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <Button asChild variant="outline" className="hidden lg:flex">
                            <Link href="/file-itr">File ITR</Link>
                        </Button>
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md px-4 h-9 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90" style={{ backgroundColor: '#C6A85E' }}>Consult Now</Link>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                            <SheetDescription className="sr-only">Navigation links</SheetDescription>
                            <div className="flex flex-col space-y-4 mt-6">
                                <Link href="/" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                                    Home
                                </Link>
                                <Link href="/about" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                                    About Us
                                </Link>
                                <div className="flex flex-col space-y-2">
                                    <span className="text-lg font-semibold text-muted-foreground">Services</span>
                                    {components.map((item) => (
                                        <Link key={item.href} href={item.href} className="pl-4 text-base" onClick={() => setIsOpen(false)}>
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                                <Link href="/blog" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                                    Blog
                                </Link>
                                <Link href="/contact" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                                    Contact
                                </Link>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-lg font-semibold">Theme</span>
                                    <ModeToggle />
                                </div>
                                <Button asChild variant="outline" className="mt-4 w-full justify-start pl-4 text-lg h-auto py-2 border-none">
                                    <Link href="/file-itr" onClick={() => setIsOpen(false)}>File ITR</Link>
                                </Button>
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-2 w-full inline-flex items-center justify-center rounded-md px-4 h-10 text-sm font-medium text-white transition-all hover:opacity-90" style={{ backgroundColor: '#C6A85E' }}>Consult Now</Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
