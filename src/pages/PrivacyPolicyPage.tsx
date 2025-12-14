import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivacyPolicyPage = () => {
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
            <div className="container mx-auto px-4  py-5">
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
                <div className="absolute inset-0 bg-secondary/30" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2 mb-6">
                            Privacy <span className="text-primary">Policy</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="pt-4 pb-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-2xl p-8 md:p-12">
                        <div className="prose prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground max-w-none">
                            <p className="lead">
                                At Maxify Global, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                            </p>

                            <h2>1. Information We Collect</h2>
                            <h3>Personal Information You Disclose to Us</h3>
                            <p>We collect personal information that you voluntarily provide to us when you:</p>
                            <ul>
                                <li>Express an interest in obtaining information about us or our products and services</li>
                                <li>Contact us via phone, email, or social media</li>
                                <li>Request services from us</li>
                                <li>Participate in activities on our website</li>
                                <li>Otherwise communicate with us</li>
                            </ul>

                            <p>The personal information we collect may include:</p>
                            <ul>
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Mailing address</li>
                                <li>Billing and payment information</li>
                                <li>Business information</li>
                                <li>Project details and requirements</li>
                                <li>Any other information you choose to provide</li>
                            </ul>

                            <h3>Information Automatically Collected</h3>
                            <p>We automatically collect certain information when you visit, use, or navigate our website:</p>
                            <ul>
                                <li><strong>Log and Usage Data:</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our website.</li>
                                <li><strong>Device Data:</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access our website.</li>
                                <li><strong>Location Data:</strong> We collect location data such as information about your device's location, which can be either precise or imprecise.</li>
                            </ul>

                            <h2>2. How We Use Your Information</h2>
                            <p>We use personal information collected via our website for a variety of business purposes described below:</p>
                            <ul>
                                <li>To provide and maintain our services</li>
                                <li>To improve, personalize, and expand our services</li>
                                <li>To understand and analyze how you use our website</li>
                                <li>To communicate with you, either directly or through one of our partners</li>
                                <li>To send you updates and promotional materials</li>
                                <li>To process your payments and transactions</li>
                                <li>To prevent fraudulent transactions and monitor against theft</li>
                                <li>To comply with legal obligations</li>
                                <li>To respond to legal requests and prevent harm</li>
                            </ul>

                            <h2>3. Sharing Your Information</h2>
                            <p>We may share or transfer your information in the following situations:</p>
                            <ul>
                                <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services for us.</li>
                                <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                                <li><strong>With Affiliates:</strong> We may share your information with our affiliates.</li>
                                <li><strong>With Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                                <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
                            </ul>

                            <h2>4. Data Security</h2>
                            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

                            <h2>5. Data Retention</h2>
                            <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your personal information to the extent necessary to comply with our legal obligations.</p>

                            <h2>6. Your Privacy Rights</h2>
                            <p>You have certain rights regarding your personal information:</p>
                            <ul>
                                <li><strong>Access:</strong> You have the right to request copies of your personal information.</li>
                                <li><strong>Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                                <li><strong>Erasure:</strong> You have the right to request that we erase your personal information.</li>
                                <li><strong>Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal information.</li>
                                <li><strong>Object to Processing:</strong> You have the right to object to our processing of your personal information.</li>
                                <li><strong>Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization.</li>
                            </ul>

                            <h2>7. Cookies and Tracking Technologies</h2>
                            <p>We may use cookies and similar tracking technologies to access or store information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

                            <h2>8. Third-Party Websites</h2>
                            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to read their privacy statements.</p>

                            <h2>9. Children's Privacy</h2>
                            <p>Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information.</p>

                            <h2>10. Changes to This Privacy Policy</h2>
                            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

                            <h2>11. Contact Us</h2>
                            <p>If you have questions or comments about this policy, you may email us at <a href="mailto:support@maxifyglobal.in">support@maxifyglobal.in</a> or by post to:</p>
                            <p>
                                Maxify Global<br />
                                E 07 Shriram Chauraha Near Sarthak Atta Chakki,<br />
                                Kalindi Gold City Jakhiya, Shri Aurobindo Indore 453555
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;