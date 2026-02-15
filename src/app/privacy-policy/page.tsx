import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Zrotax",
    description: "Read the Zrotax privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container max-w-4xl py-12 md:py-24 space-y-10">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-foreground">Privacy Policy</h1>
                <p className="text-muted-foreground text-sm">Effective as of 1st Feb 2023</p>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground/90">

                {/* 1. Introduction */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>

                    <h3 className="text-lg font-semibold text-foreground">1.a About this Policy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        &quot;<a href="https://www.zrotax.com" className="text-ring hover:underline">www.zrotax.com</a>&quot; is a web domain name owned and operated by Zrotax, located at Guruganesh Residency, Kirti Nagar, Akola - 444001. Contact: 83808 94711. Email: <a href="mailto:hi.zrotax@gmail.com" className="text-ring hover:underline">hi.zrotax@gmail.com</a>
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        The terms &apos;I&apos;/&apos;We&apos;/&apos;Us&apos;/&apos;Our&apos;/&apos;Company&apos;/Zrotax individually and collectively refer to Zrotax and the terms &apos;You&apos;/&apos;Your&apos;/&apos;Yourself&apos;/&apos;User&apos; refer to the users.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        This Privacy Policy is an electronic record in the form of an electronic contract formed under the Information Technology Act, 2000 and the rules made thereunder and the amended provisions about electronic documents/records in various statutes as amended by the Information Technology Act, 2000. This Privacy Policy does not require any physical, electronic, or digital signature.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        This page is used to inform visitors regarding our policies regarding the collection, use, and disclosure of Personal Information if anyone decides to use our Service. Please read the following Privacy Policies carefully. By using the Website, you indicate that you understand, agree and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use this Website.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                    </p>
                </section>

                {/* 2. Information Collection and Use */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">2. Information Collection and Use</h2>

                    <h3 className="text-lg font-semibold text-foreground">2.a User Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Full Name, Phone Number, Email ID, Exam You are Preparing For, Password, Profile Image. The Information as supplied by the users enables us to improve our platform and provide you the most user-friendly experience.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        All required information is service dependent and we may use the above said user information to, maintain, protect, and improve its services (including advertising services) and for developing new services. Such information will not be considered as sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005 or any other law for the time being in force.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        The Website does use third party services that may collect information used to identify you. Link to privacy policy of third party service providers:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><a href="https://www.google.com/policies/privacy/" className="text-ring hover:underline" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
                        <li><a href="https://firebase.google.com/policies/analytics" className="text-ring hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
                        <li><a href="https://firebase.google.com/support/privacy/" className="text-ring hover:underline" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a></li>
                    </ul>

                    <h3 className="text-lg font-semibold text-foreground">2.b Log Data</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        We want to inform you that whenever you use our Service, in a case of an error in the Website we collect data and information (through third party products) called Log Data. This Log Data may include information such as your device Internet Protocol (&quot;IP&quot;) address, device name, operating system version, the configuration of the Website when utilizing our Service, the time and date of your use of the Service, and other statistics.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground">2.c Phone Number Use and Share</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Phone Number provided by you ensures that the account is uniquely created and there is not any other duplicate account with the same phone number. To facilitate this functionality we use a service called &quot;Firebase Authentication Service&quot; provided by Google LLC. The phone number provided by you for authentication will be sent and stored by Google to improve our spam and abuse prevention across Google services, including but not limited to Firebase.
                    </p>
                </section>

                {/* 3. Cookies */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">3. Cookies</h2>

                    <h3 className="text-lg font-semibold text-foreground">3.a What are cookies?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device&apos;s internal memory.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground">3.b How Zrotax uses cookies?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        This Service does not use these &quot;cookies&quot; explicitly. However, the Website may use third party code and libraries that use &quot;cookies&quot; to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                    </p>
                </section>

                {/* 4. Third Party Service Providers */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">4. Third Party Service Providers</h2>

                    <h3 className="text-lg font-semibold text-foreground">4.a Employing third-party companies and individuals</h3>
                    <p className="text-muted-foreground leading-relaxed">We may employ third-party companies and individuals due to the following reasons:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>To facilitate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To perform Service-related services; or</li>
                        <li>To assist us in analyzing how our Service is used.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-foreground">4.b How your information is shared</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        We share the sensitive personal information to any third party without obtaining the prior consent of the user in the following limited circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>(a) When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences.</li>
                        <li>(b) We propose to share such information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf.</li>
                    </ul>
                </section>

                {/* 5. Security */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">5. Security</h2>

                    <h3 className="text-lg font-semibold text-foreground">5.a Measures taken</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground">5.b Access to information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        All information gathered on our Website is securely stored within our controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and is strictly limited. However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet.
                    </p>
                </section>

                {/* 6. Links to Other Sites */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">6. Links to Other Sites</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                    </p>
                </section>

                {/* 7. Future Changes */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">7. Future Changes</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The internet is an ever evolving medium. We may change our Privacy Policy from time to time to incorporate necessary future changes. Our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be. You are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                </section>

                {/* 8. Refund and Cancellation Policy */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">8. Refund and Cancellation Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We are committed to delivering high-quality results and investing our time and resources to meet your specific needs. As such, we have implemented a &quot;No Refund &amp; Cancellation Policy&quot; for our services. Please carefully review the following terms:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                        <li><strong className="text-foreground">No Refunds:</strong> Once you have engaged our services and made the necessary payment, no refunds will be issued under any circumstances. This policy applies to all services provided by our company.</li>
                        <li><strong className="text-foreground">No Cancellations:</strong> Once our services are engaged, cancellation requests will not be accepted. We allocate our team&apos;s time, expertise, and resources based on the agreed-upon project scope, and any cancellations would result in a loss of these valuable resources.</li>
                        <li><strong className="text-foreground">Contractual Obligations:</strong> By engaging our services, you acknowledge and agree to fulfill all contractual obligations as outlined in our agreement or contract. Failure to fulfill these obligations does not entitle you to a refund or cancellation.</li>
                        <li><strong className="text-foreground">Satisfaction Guarantee:</strong> While we do not offer refunds or cancellations, we strive to ensure your satisfaction with our services. We will work diligently to address any concerns, rectify any issues, and make necessary adjustments to meet your expectations.</li>
                        <li><strong className="text-foreground">Scope Changes:</strong> If you wish to make changes to the project scope or request additional services, such requests may be accommodated at our discretion. However, they may result in additional fees or an adjustment to the project timeline.</li>
                    </ul>
                </section>

                {/* Grievance Redressal */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Grievance Redressal</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Any complaints, abuse or concerns with regards to content and or comment or breach of these terms shall be immediately informed to the designated Grievance Officer as mentioned below via in writing or through email:
                    </p>
                    <div className="bg-card border border-border rounded-lg p-6 space-y-2 text-muted-foreground">
                        <p><strong className="text-foreground">CA Pranay Bafna</strong> (Grievance Officer)</p>
                        <p>Company Name &amp; Address: Zrotax, Guruganesh Residency, Kirti Nagar, Akola - 444001</p>
                        <p>Contact: 83808 94711</p>
                        <p>Email: <a href="mailto:ca.pranaybafna@gmail.com" className="text-ring hover:underline">ca.pranaybafna@gmail.com</a></p>
                    </div>
                </section>
            </div>
        </div>
    );
}
