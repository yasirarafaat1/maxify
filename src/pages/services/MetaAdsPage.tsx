import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Eye,
  Heart,
  Share2,
  BarChart3,
  Smartphone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import metaAdsImage from "@/assets/metads.jpg";

const MetaAdsPage = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+917355553093";
    const message = "Hello, I would like to run Facebook and Instagram ads for my business.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    "Massive reach potential",
    "Advanced targeting options",
    "High engagement rates",
    "Multiple ad formats",
    "Strong ROI potential"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r mt-10 from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">SOCIAL MEDIA ADS</Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Meta Ads <span className="gradient-text">& Facebook</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Reach your ideal audience on Facebook and Instagram with our expert Meta Ads management.
                Drive engagement, conversions, and brand awareness with precisely targeted campaigns.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="gradient-bg hover:opacity-90 transition-all transform hover:scale-105"
                  onClick={handleWhatsAppRedirect}
                >
                  Start Advertising
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={metaAdsImage}
                  alt="Meta Ads and Facebook Advertising"
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
              Power of <span className="gradient-text">Meta Advertising</span>
            </h2>
            <p className="text-muted-foreground">
              Leverage the world's largest social media platforms for maximum business impact
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
                Expert <span className="gradient-text">Meta Ad Management</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our certified specialists create and manage high-performing campaigns across Facebook and Instagram.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Users, title: "Audience Targeting", desc: "Precise targeting based on demographics, interests, and behaviors" },
                  { icon: Eye, title: "Ad Creative", desc: "Eye-catching visuals and compelling copy that drives engagement" },
                  { icon: Heart, title: "Engagement Optimization", desc: "Strategies to boost likes, shares, comments, and saves" },
                  { icon: Share2, title: "Viral Potential", desc: "Campaigns designed to encourage sharing and organic reach" },
                  { icon: BarChart3, title: "Performance Analytics", desc: "Detailed reporting with insights for continuous improvement" },
                  { icon: Smartphone, title: "Mobile-First Approach", desc: "Optimized for the mobile-first nature of social media" }
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
                    <span className="font-medium">Engagement Rate</span>
                    <Badge variant="secondary">+150%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <span className="font-medium">Conversion Rate</span>
                    <Badge variant="secondary">+95%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <span className="font-medium">Cost Per Acquisition</span>
                    <Badge variant="secondary">-35%</Badge>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                  <h3 className="font-heading font-semibold mb-2">Ready to Go Viral?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let us create compelling Meta Ads that drive results for your business.
                  </p>
                  <Button
                    className="w-full gradient-bg hover:opacity-90"
                    onClick={handleWhatsAppRedirect}
                  >
                    Get Your Free Strategy Session
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

export default MetaAdsPage;