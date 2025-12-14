import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Users,
    TrendingUp,
    Heart,
    Share2,
    Camera,
    Calendar,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import socialMediaImage from "@/assets/socialmedia1.webp";

const SocialMediaManagementPage = () => {
    const handleWhatsAppRedirect = () => {
        const phoneNumber = "+917355553093";
        const message = "Hello, I would like to boost my social media presence.";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const benefits = [
        "Increased brand awareness",
        "Higher engagement rates",
        "Stronger customer relationships",
        "Improved website traffic",
        "Enhanced brand loyalty"
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="py-16 mt-10 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-4" variant="secondary">SOCIAL PRESENCE</Badge>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                Social Media <span className="text-primary">Management</span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8">
                                Build a strong social media presence and engage your audience with our comprehensive
                                social media management services. From content creation to community management, we've got you covered.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    className="bg-primary hover:opacity-90 transition-all transform hover:scale-105"
                                    onClick={handleWhatsAppRedirect}
                                >
                                    Grow Your Presence
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={socialMediaImage}
                                    alt="Social Media Management"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Social Media <span className="text-primary">Benefits</span>
                        </h2>
                        <p className="text-muted-foreground">
                            Transform your social media into a powerful growth engine for your business
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                                        <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                    <CardTitle>{benefit}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Complete <span className="text-primary">Social Management</span>
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Our social media experts handle all aspects of your social presence to maximize engagement and growth.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Camera, title: "Content Creation", desc: "Professional visuals and engaging copy tailored to each platform" },
                                    { icon: Calendar, title: "Content Planning", desc: "Strategic content calendars aligned with your business goals" },
                                    { icon: Heart, title: "Community Management", desc: "Prompt responses to comments and messages to build relationships" },
                                    { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven approaches to expand your follower base" },
                                    { icon: Share2, title: "Viral Campaigns", desc: "Creative campaigns designed to encourage sharing and organic reach" },
                                    { icon: Users, title: "Audience Insights", desc: "Deep understanding of your audience for better targeting" }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                                            <feature.icon className="h-5 w-5 text-primary-foreground" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold font-heading">{feature.title}</h3>
                                            <p className="text-muted-foreground text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-card border border-border/50 rounded-2xl p-8">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                                        <span className="font-medium">Engagement Rate</span>
                                        <Badge variant="secondary">+300%</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                                        <span className="font-medium">Follower Growth</span>
                                        <Badge variant="secondary">+180%</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                                        <span className="font-medium">Website Traffic</span>
                                        <Badge variant="secondary">+120%</Badge>
                                    </div>
                                </div>

                                <div className="mt-8 p-6 rounded-xl border border-primary/20 bg-card">
                                    <h3 className="font-heading font-semibold mb-2">Ready to Dominate Social Media?</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Let us create a powerful social media strategy for your brand.
                                    </p>
                                    <Button
                                        className="w-full bg-primary hover:opacity-90"
                                        onClick={handleWhatsAppRedirect}
                                    >
                                        Get Your Free Consultation
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SocialMediaManagementPage;