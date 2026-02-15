import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | Zrotax",
    description: "Read the Zrotax terms and conditions that govern accessing and using our website and services.",
};

export default function TermsPage() {
    return (
        <div className="container max-w-4xl py-12 md:py-24 space-y-10">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-foreground">Terms and Conditions</h1>
                <p className="text-muted-foreground text-sm">Last updated: 01/04/2025</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the services provided by Zrotax through our website located at <a href="https://www.zrotax.com" className="text-ring hover:underline">www.zrotax.com</a> (&quot;Website&quot;). By accessing or using our Website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you must refrain from using our Website and services.
            </p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground/90">

                {/* 1 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">1. Definitions</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">&quot;We&quot;/&quot;Us&quot;/&quot;Our&quot;:</strong> Refers to Zrotax, a company registered and located at Guruganesh Residency, Kirti Nagar, Akola - 444001, Maharashtra, India.</li>
                        <li><strong className="text-foreground">&quot;You&quot;/&quot;User&quot;:</strong> Refers to any person or entity who accesses or uses the Website or services, including but not limited to visitors and registered users.</li>
                        <li><strong className="text-foreground">&quot;Services&quot;:</strong> Refers to all services provided by Zrotax via the Website, including any content, features, or tools offered.</li>
                    </ul>
                </section>

                {/* 2 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">2. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        By accessing or using our Website, you accept and agree to be bound by these Terms. If you disagree with any part of these Terms, you must not use the Website or services. We reserve the right to modify, update, or change these Terms at any time. When we do, the updated Terms will be posted on this page, and the date of the last update will be indicated.
                    </p>
                </section>

                {/* 3 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">3. User Eligibility</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        To use the Website, you must be at least 18 years old or have the legal capacity to enter into a binding contract. If you are using the Website on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                    </p>
                </section>

                {/* 4 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">4. Account Registration</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">Account Creation:</strong> Some features of our services may require you to create an account. When registering, you agree to provide accurate, complete, and up-to-date information.</li>
                        <li><strong className="text-foreground">Security:</strong> You are responsible for maintaining the confidentiality of your account login details and for all activities under your account. If you believe your account has been compromised, you should notify us immediately.</li>
                    </ul>
                </section>

                {/* 5 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">5. Use of Services</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">Personal Use:</strong> Our Website and services are intended for personal use. You may not use the Website or services for commercial purposes without our explicit consent.</li>
                        <li><strong className="text-foreground">Prohibited Activities:</strong> You agree not to use the Website for any unlawful activities, including but not limited to:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>Violating any laws or regulations.</li>
                                <li>Uploading or transmitting viruses, malware, or other harmful content.</li>
                                <li>Interfering with the security or functionality of the Website.</li>
                                <li>Engaging in any activities that could harm our business reputation or disrupt other users.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* 6 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">6. Intellectual Property</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">Ownership:</strong> All content, materials, logos, trademarks, and intellectual property on the Website are owned by or licensed to Zrotax and are protected by applicable copyright and trademark laws.</li>
                        <li><strong className="text-foreground">License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use the Website solely for personal and non-commercial purposes.</li>
                    </ul>
                </section>

                {/* 7 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">7. Third-Party Links</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Our Website may contain links to third-party websites or services. These third-party sites are not operated by us, and we have no control over or responsibility for their content, privacy policies, or practices. We recommend that you review the terms and privacy policies of any third-party sites you visit.
                    </p>
                </section>

                {/* 8 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">8. Privacy and Data Protection</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Your use of our services is subject to our <a href="/privacy-policy" className="text-ring hover:underline">Privacy Policy</a>, which outlines how we collect, use, and protect your personal information. By using the Website, you consent to the collection and use of your data in accordance with our Privacy Policy.
                    </p>
                </section>

                {/* 9 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">9. Payment and Billing</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">Payment for Services:</strong> Certain services on our Website may require payment. You agree to provide accurate payment information and authorize us to charge the applicable fees for the services you use.</li>
                        <li><strong className="text-foreground">Refund Policy:</strong> All payments made are non-refundable, except as otherwise specified in our Refund Policy.</li>
                    </ul>
                </section>

                {/* 10 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">10. Disclaimers</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">No Warranty:</strong> The Website and services are provided &quot;as is&quot; and &quot;as available.&quot; We do not warrant that the Website will be uninterrupted or error-free, nor do we make any guarantees regarding the accuracy, completeness, or reliability of the content.</li>
                        <li><strong className="text-foreground">Limitation of Liability:</strong> To the maximum extent permitted by law, Zrotax shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use or inability to use the Website, services, or content.</li>
                    </ul>
                </section>

                {/* 11 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">11. Indemnification</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        You agree to indemnify, defend, and hold harmless Zrotax, its employees, agents, affiliates, and partners from any claims, liabilities, damages, losses, or expenses (including legal fees) arising out of your use of the Website, violation of these Terms, or infringement of any intellectual property or other rights.
                    </p>
                </section>

                {/* 12 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">12. Termination</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">By User:</strong> You may stop using our Website at any time by discontinuing your access to the Website.</li>
                        <li><strong className="text-foreground">By Zrotax:</strong> We reserve the right to suspend or terminate your access to the Website at our sole discretion, without notice, for violations of these Terms or other reasons that we deem appropriate.</li>
                    </ul>
                </section>

                {/* 13 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">13. Governing Law</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or the use of the Website shall be resolved exclusively in the courts located in Akola, Maharashtra, India.
                    </p>
                </section>

                {/* 14 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">14. Changes to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We may update these Terms from time to time to reflect changes in our services or to comply with legal requirements. When we update the Terms, we will post the new version on this page and indicate the effective date. Your continued use of the Website after any such changes constitutes your acceptance of the updated Terms.
                    </p>
                </section>

                {/* 15 */}
                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">15. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        If you have any questions about these Terms or any other aspect of the Website, please contact us at:
                    </p>
                    <div className="bg-card border border-border rounded-lg p-6 space-y-2 text-muted-foreground">
                        <p>Email: <a href="mailto:hi.zrotax@gmail.com" className="text-ring hover:underline">hi.zrotax@gmail.com</a></p>
                        <p>Phone: +91 83808 94711</p>
                        <p>Address: Guruganesh Residency, Kirti Nagar, Akola - 444001, Maharashtra, India</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
