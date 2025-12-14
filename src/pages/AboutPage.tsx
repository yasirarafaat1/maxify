import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { CheckCircle2, Award, Users, Globe, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import useRefreshOnRouteChange from "@/hooks/useRefreshOnRouteChange";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Award, value: "100+", label: "Awards Won" },
  { icon: TrendingUp, value: "10M+", label: "Revenue Generated" },
];

const team = [
  { name: "John Smith", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
  { name: "Sarah Johnson", role: "Marketing Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
  { name: "Michael Chen", role: "Head of SEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
  { name: "Emily Davis", role: "Creative Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
];

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  // This will force the component to refresh when routes change
  const refreshKey = useRefreshOnRouteChange();

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
    <div key={refreshKey} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* <span className="text-primary font-medium">About Us</span> */}
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2 mb-6">
              We're <span className="text-primary">Maxify Global</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A team of passionate digital marketers dedicated to helping businesses
              grow and succeed in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-6">
                Driving Digital <span className="text-primary">Success</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Maxify Global, our mission is to empower businesses of all sizes to achieve
                their full potential in the digital world. We believe that every brand deserves
                a powerful online presence.
              </p>
              <ul className="space-y-3">
                {[
                  "Deliver measurable results for every client",
                  "Stay ahead of industry trends and innovations",
                  "Build long-term partnerships based on trust",
                  "Provide transparent and honest communication",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary opacity-10 rounded-3xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;