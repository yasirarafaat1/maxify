import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Smartphone,
  Zap,
  Palette,
  Lock,
  BarChart3,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import webDevImage from "@/assets/website.webp";

const WebDevelopmentPage = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+917355553093";
    const message = "Hello, I would like to build a website for my business.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    "Modern, responsive designs",
    "Fast loading speeds",
    "SEO optimized",
    "Secure and scalable",
    "Easy to maintain"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r mt-10 from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">WEB SOLUTIONS</Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Web <span className="gradient-text">Development</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Create stunning, high-converting websites that represent your brand and drive business growth.
                Our expert developers build fast, secure, and scalable web solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="gradient-bg hover:opacity-90 transition-all transform hover:scale-105"
                  onClick={handleWhatsAppRedirect}
                >
                  Build Your Website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={webDevImage}
                  alt="Web Development"
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
              Web Development <span className="gradient-text">Advantages</span>
            </h2>
            <p className="text-muted-foreground">
              Modern websites that deliver exceptional user experiences and business results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
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
                Comprehensive <span className="gradient-text">Web Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our development team creates custom websites and web applications that drive results.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Code, title: "Custom Development", desc: "Tailored solutions built specifically for your business needs" },
                  { icon: Smartphone, title: "Responsive Design", desc: "Flawless experience across all devices and screen sizes" },
                  { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance to reduce bounce rates" },
                  { icon: Palette, title: "Modern UI/UX", desc: "Beautiful designs that enhance user engagement and conversions" },
                  { icon: Lock, title: "Secure & Scalable", desc: "Robust security measures and architecture that grows with you" },
                  { icon: BarChart3, title: "Analytics Integration", desc: "Built-in tracking to measure performance and user behavior" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0 mt-1">
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
                    <span className="font-medium">Load Speed</span>
                    <Badge variant="secondary">Under 2 seconds</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <span className="font-medium">Mobile Score</span>
                    <Badge variant="secondary">95+/100</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <span className="font-medium">SEO Score</span>
                    <Badge variant="secondary">90+/100</Badge>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                  <h3 className="font-heading font-semibold mb-2">Ready to Launch Your Website?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let us create a stunning website that converts visitors into customers.
                  </p>
                  <Button
                    className="w-full gradient-bg hover:opacity-90"
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

export default WebDevelopmentPage;