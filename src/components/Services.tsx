import { Search, TrendingUp, Share2, Megaphone, BarChart3, Globe, Code, Mail, Users, Youtube, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
    link: "/services/seo",
  },
  {
    icon: TrendingUp,
    title: "Google Ads Management",
    description: "Maximize ROI with data-driven paid campaigns across Google Search, Display, and Shopping.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Build a strong social presence and engage your audience across all platforms.",
    link: "/services/social-media-management",
  },
  {
    icon: Megaphone,
    title: "Meta Ads & Facebook Ads",
    description: "Target the right audience with strategic Facebook and Instagram advertising campaigns.",
    link: "/services/meta-ads",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Make informed decisions with comprehensive data analysis and reporting.",
    link: "/services/seo",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Create stunning, high-converting websites optimized for performance.",
    link: "/services/web-development",
  },
  {
    icon: Youtube,
    title: "YouTube Ads",
    description: "Reach engaged audiences and drive conversions with compelling video campaigns.",
    link: "/services/youtube-ads",
  },
  {
    icon: MapPin,
    title: "GMB Listing",
    description: "Optimize your Google My Business profile to get found by local customers.",
    link: "/services/gmb-listing",
  },
];

const Services = () => {
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
    <section id="services" className="pt-10 py-10 relative">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* <span className="text-primary font-medium">Our Services</span> */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Solutions That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive digital marketing services tailored to help your business
            thrive in the competitive online landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link to={service.link} key={service.title} className="block group">
              <Card
                className={`border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer h-full transition-all duration-300 ${isMobile ? '' : 'hover:shadow-xl hover:-translate-y-2'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 ${isMobile ? '' : 'group-hover:animate-pulse-glow'}`}>
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className={`text-lg font-heading font-semibold mb-2 ${isMobile ? '' : 'group-hover:text-primary'}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-grow">
                    {service.description}
                  </p>
                  <div className={`flex items-center mt-4 text-primary font-medium ${isMobile ? '' : 'group-hover:translate-x-1'} transition-transform`}>
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;