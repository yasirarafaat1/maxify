import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TermsOfServicePage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Back to Home Button */}
            <div className="container mx-auto px-4 py-5">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Home
                </Link>
            </div>

            {/* Hero Section */}
            <section className="pt-5 pb-5 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(209_90%_50%_/_0.1),_transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2 mb-6">
                            Terms of <span className="gradient-text">Service</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms of Service Content */}
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-2xl p-8 md:p-12">
                        <div className="prose prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground max-w-none">
                            <p className="lead">
                                Welcome to Maxify Global. These Terms of Service govern your access to and use of our website and services. By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                            </p>

                            <h2>1. Acceptance of Terms</h2>
                            <p>By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not access or use our services.</p>

                            <h2>2. Description of Services</h2>
                            <p>Maxify Global provides digital marketing services including but not limited to:</p>
                            <ul>
                                <li>Search Engine Optimization (SEO)</li>
                                <li>Social Media Marketing</li>
                                <li>Pay-Per-Click Advertising</li>
                                <li>Content Marketing</li>
                                <li>Email Marketing</li>
                                <li>Web Design and Development</li>
                                <li>Analytics and Reporting</li>
                            </ul>
                            <p>Our services are subject to change without notice. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>

                            <h2>3. User Responsibilities</h2>
                            <p>As a user of our services, you agree to:</p>
                            <ul>
                                <li>Provide accurate and complete information when requested</li>
                                <li>Maintain the confidentiality of your account credentials</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Not use our services for any unlawful purpose</li>
                                <li>Not interfere with or disrupt the integrity or performance of our services</li>
                            </ul>

                            <h2>4. Intellectual Property</h2>
                            <p>All content, trademarks, service marks, logos, and other intellectual property displayed on our website or used in connection with our services are the property of Maxify Global or its licensors. You may not use, copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload, display, license, sell, or commercialize any content without our express written permission.</p>

                            <h2>5. Client Content</h2>
                            <p>You retain ownership of any content you provide to us ("Client Content"). By providing us with Client Content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such content solely for the purpose of providing our services to you.</p>

                            <h2>6. Payment Terms</h2>
                            <p>Our fees and payment terms will be agreed upon in writing between you and Maxify Global. You agree to pay all fees and charges incurred in accordance with the payment terms specified in your agreement with us. All fees are exclusive of taxes, and you are responsible for paying any applicable taxes.</p>

                            <h2>7. Confidentiality</h2>
                            <p>Both parties agree to maintain the confidentiality of proprietary information disclosed during the course of the business relationship. This obligation will survive the termination of these Terms of Service.</p>

                            <h2>8. Limitation of Liability</h2>
                            <p>To the maximum extent permitted by law, Maxify Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
                            <ul>
                                <li>Your access to or use of or inability to access or use our services</li>
                                <li>Any conduct or content of any third party</li>
                                <li>Any content obtained from our services</li>
                                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                            </ul>

                            <h2>9. Indemnification</h2>
                            <p>You agree to indemnify, defend, and hold harmless Maxify Global, its affiliates, officers, directors, employees, agents, licensors, and suppliers from and against all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms of Service or any activity related to your account.</p>

                            <h2>10. Termination</h2>
                            <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service. Upon termination, your right to use our services will immediately cease.</p>

                            <h2>11. Governing Law</h2>
                            <p>These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Indore, Madhya Pradesh for the resolution of any disputes arising out of these Terms of Service.</p>

                            <h2>12. Dispute Resolution</h2>
                            <p>Any dispute, controversy, or claim arising out of or relating to these Terms of Service, including the breach, termination, or invalidity thereof, shall be settled by arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Indore, Madhya Pradesh, and the language of arbitration shall be English.</p>

                            <h2>13. Force Majeure</h2>
                            <p>Maxify Global shall not be liable for any failure to perform its obligations hereunder where such failure results from any cause beyond its reasonable control, including, without limitation, mechanical, electronic, or communications failure or degradation.</p>

                            <h2>14. Entire Agreement</h2>
                            <p>These Terms of Service constitute the entire agreement between you and Maxify Global regarding the use of our services and supersede all prior and contemporaneous agreements and understandings, whether oral or written.</p>

                            <h2>15. Amendments</h2>
                            <p>We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

                            <h2>16. Contact Information</h2>
                            <p>If you have any questions about these Terms of Service, please contact us at:</p>
                            <p>
                                Maxify Global<br />
                                E 07 Shriram Chauraha Near Sarthak Atta Chakki,<br />
                                Kalindi Gold City Jakhiya, Shri Aurobindo Indore 453555<br />
                                Email: <a href="mailto:support@maxifyglobal.in">support@maxifyglobal.in</a><br />
                                Phone: +91 73555 53093
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TermsOfServicePage;