import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  TrendingUp,
  BarChart3,
  FileText,
  Link,
  Smartphone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import seoImage from "@/assets/seo1.webp";

const SEOPage = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+917355553093";
    const message = "Hello, I would like to get a free SEO audit for my website.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    "Higher search rankings",
    "Increased organic traffic",
    "Better user experience",
    "Long-term results",
    "Cost-effective marketing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r mt-10 from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">ORGANIC TRAFFIC</Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                SEO <span className="gradient-text">Optimization</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Boost your search engine rankings and drive organic traffic with our comprehensive
                SEO services. Our data-driven approach helps you rank higher and attract qualified visitors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="gradient-bg hover:opacity-90 transition-all transform hover:scale-105"
                  onClick={handleWhatsAppRedirect}
                >
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={seoImage}
                  alt="SEO Optimization"
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
              Benefits of <span className="gradient-text">Professional SEO</span>
            </h2>
            <p className="text-muted-foreground">
              Long-term growth through sustainable search engine optimization strategies
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
                Comprehensive <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our SEO experts implement white-hat techniques to improve your search rankings sustainably.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Search, title: "Keyword Research", desc: "Identify high-value keywords with commercial intent" },
                  { icon: TrendingUp, title: "Rank Tracking", desc: "Monitor your rankings for target keywords over time" },
                  { icon: BarChart3, title: "Performance Analytics", desc: "Detailed reports on traffic, rankings, and conversions" },
                  { icon: FileText, title: "Content Optimization", desc: "Improve existing content and create SEO-friendly new content" },
                  { icon: Link, title: "Link Building", desc: "Acquire high-quality backlinks from authoritative sites" },
                  { icon: Smartphone, title: "Technical SEO", desc: "Optimize site speed, mobile-friendliness, and crawlability" }
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
                    <span className="font-medium">Organic Traffic</span>
                    <Badge variant="secondary">+400%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <span className="font-medium">Keyword Rankings</span>
                    <Badge variant="secondary">Top 10 for 50+ keywords</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <span className="font-medium">Conversion Rate</span>
                    <Badge variant="secondary">+65%</Badge>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                  <h3 className="font-heading font-semibold mb-2">Ready to Rank Higher?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let us audit your website and create a custom SEO strategy.
                  </p>
                  <Button
                    className="w-full gradient-bg hover:opacity-90"
                    onClick={handleWhatsAppRedirect}
                  >
                    Get Your Free SEO Audit
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

export default SEOPage;