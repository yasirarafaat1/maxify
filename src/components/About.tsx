import { CheckCircle2, Target, Lightbulb, Users, Trophy, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const features = [
  "Data-driven approach to every campaign",
  "Transparent reporting and communication",
  "Dedicated team of industry experts",
  "Custom strategies tailored to your goals",
  "24/7 support and campaign monitoring",
];

const values = [
  { icon: Target, title: "Results-Focused", description: "We measure success by your growth" },
  { icon: Lightbulb, title: "Innovation", description: "Staying ahead with latest trends" },
  { icon: Users, title: "Partnership", description: "Your success is our success" },
];

const stats = [
  { icon: Trophy, value: "500+", label: "Successful Campaigns" },
  { icon: TrendingUp, value: "300%", label: "Avg. ROI Increase" },
  { icon: Award, value: "98%", label: "Client Retention" },
  { icon: Users, value: "50+", label: "Expert Team Members" },
];

const About = () => {
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
    <section id="about" className="py-10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* <span className="text-primary font-medium">About Us</span> */}
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-6">
              Your Partner in{" "}
              <span className="text-primary">Digital Excellence</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Maxify Global, we're more than just a digital marketing agency.
              We're a team of passionate strategists, creative minds, and data enthusiasts
              committed to transforming your digital presence.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Since our inception, we've helped hundreds of businesses across industries
              achieve their marketing goals through innovative strategies and measurable results.
              Our award-winning team combines creativity with analytics to deliver campaigns that convert.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <Button className={`bg-primary transition-all px-8 py-6 text-lg font-bold ${isMobile ? '' : 'hover:opacity-90 transform hover:scale-105 hover:shadow-xl'}`}>
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Right Content - Values and Stats */}
          <div className="relative">
            <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl blur-3xl" />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-card border border-border/50 rounded-2xl p-4 text-center ${isMobile ? '' : 'hover:shadow-md transition-shadow'}`}
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="relative bg-card border border-border/50 rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-heading font-bold">Our Core Values</h3>
      
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className={`flex items-start gap-4 p-4 rounded-xl ${isMobile ? '' : 'hover:bg-secondary/50 transition-colors'}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-heading">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}

              {/* Achievement Badge */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-heading font-bold text-primary">10+</div>
                  <div>
                    <div className="font-semibold">Years of Excellence</div>
                    <div className="text-sm text-muted-foreground">Delivering digital success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;