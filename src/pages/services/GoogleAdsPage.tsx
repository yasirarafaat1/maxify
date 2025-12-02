import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Target,
  DollarSign,
  BarChart3,
  MousePointerClick,
  Clock,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import googleAdsImage from "@/assets/googleads1.webp";

const GoogleAdsPage = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+917355553093";
    const message = "Hello, I would like to run Google Ads for my business.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    "Higher conversion rates",
    "Precise targeting options",
    "Real-time performance data",
    "Flexible budget control",
    "Measurable ROI"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r mt-10 from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">PAID ADVERTISING</Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Google Ads <span className="gradient-text">Management</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Drive targeted traffic and maximize ROI with our expert Google Ads management services.
                From Search to Display campaigns, we create strategies that deliver results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="gradient-bg hover:opacity-90 transition-all transform hover:scale-105"
                  onClick={handleWhatsAppRedirect}
                >
                  Launch Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={googleAdsImage}
                  alt="Google Ads Management"
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
              Google Ads <span className="gradient-text">Advantages</span>
            </h2>
            <p className="text-muted-foreground">
              Our data-driven approach ensures your advertising budget delivers maximum impact
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
                Comprehensive <span className="gradient-text">Ad Management</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our certified specialists manage every aspect of your Google Ads campaigns for optimal performance.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Target, title: "Strategic Targeting", desc: "Reach the right audience with precise demographic and behavioral targeting" },
                  { icon: TrendingUp, title: "Conversion Optimization", desc: "Continuously improve campaign performance and conversion rates" },
                  { icon: DollarSign, title: "Budget Management", desc: "Maximize ROI with smart bidding and budget allocation strategies" },
                  { icon: BarChart3, title: "Advanced Analytics", desc: "Detailed reporting with actionable insights for continuous improvement" },
                  { icon: MousePointerClick, title: "Ad Copywriting", desc: "Compelling ad copy that drives clicks and conversions" },
                  { icon: Clock, title: "24/7 Monitoring", desc: "Constant oversight to ensure campaigns perform at peak efficiency" }
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
                    <span className="font-medium">Click-Through Rate</span>
                    <Badge variant="secondary">+120%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <span className="font-medium">Conversion Rate</span>
                    <Badge variant="secondary">+85%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <span className="font-medium">Cost Per Lead</span>
                    <Badge variant="secondary">-40%</Badge>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                  <h3 className="font-heading font-semibold mb-2">Ready to Boost Your Traffic?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let us create a winning Google Ads strategy for your business.
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

export default GoogleAdsPage;