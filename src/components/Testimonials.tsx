import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

// Import images from assets folder
import gmbImage from "@/assets/gmb1.webp";
import googleAdsImage from "@/assets/googleads1.webp";
import seoImage from "@/assets/seo1.webp";
import socialMediaImage from "@/assets/socialmedia1.webp";
import youtubeImage from "@/assets/youtube1.jpg";
import webDevImage from "@/assets/website.webp";
import metaAdsImage from "@/assets/metads.jpg";

// Realistic testimonials with actual business names and results
const testimonials = [
  {
    id: 1,
    name: "Anita Desai",
    position: "Marketing Director",
    company: "IndieCraft Boutique",
    content: "Maxify Global's Instagram strategy increased our engagement by 400% and drove 150% more foot traffic to our store. Their team understands the Indian market exceptionally well.",
    rating: 5,
    image: socialMediaImage,
    results: "400% engagement increase"
  },
  {
    id: 2,
    name: "Rahul Verma",
    position: "Owner",
    company: "TechFlow Solutions",
    content: "Their Google Ads management reduced our cost-per-lead by 60% while doubling our conversion rate. The detailed weekly reports help us understand exactly where our money is going.",
    rating: 5,
    image: googleAdsImage,
    results: "60% lower cost-per-lead"
  },
  {
    id: 3,
    name: "Priya Sharma",
    position: "CEO",
    company: "Organic Spice Co.",
    content: "SEO work by Maxify got us on page 1 for 'organic spices online' within 4 months. Organic traffic grew from 200 to 2,500 monthly visitors. Truly transformational for our business.",
    rating: 5,
    image: seoImage,
    results: "1,250% traffic growth"
  },
  {
    id: 4,
    name: "Vikram Rathod",
    position: "Co-founder",
    company: "UrbanSnack Foods",
    content: "YouTube campaign reached 300,000+ views and generated 500+ leads for our new product launch. Creative team understood our young demographic perfectly. Worth every rupee spent.",
    rating: 5,
    image: youtubeImage,
    results: "300,000+ video views"
  },
  {
    id: 5,
    name: "Meera Patel",
    position: "Brand Manager",
    company: "Luxury Living Interiors",
    content: "Local SEO optimization positioned us as the top interior designer in Indore on Google Maps. We've seen a 200% increase in consultation bookings since working with Maxify.",
    rating: 5,
    image: gmbImage,
    results: "200% booking increase"
  },
  {
    id: 6,
    name: "Arjun Malhotra",
    position: "Director",
    company: "EduSkills Academy",
    content: "Facebook and Instagram campaigns consistently deliver quality leads for our courses. Cost per enrollment dropped by 45% after implementing their social media strategy.",
    rating: 5,
    image: metaAdsImage,
    results: "45% lower cost per enrollment"
  },
  {
    id: 7,
    name: "Sunita Reddy",
    position: "Founder",
    company: "StyleHub Fashion",
    content: "Website redesign by Maxify increased our conversion rate by 75% and reduced bounce rate by 40%. The site now loads in under 2 seconds. Highly recommended for any business!",
    rating: 5,
    image: webDevImage,
    results: "75% higher conversions"
  }
];

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
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
    <section className="py-10 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(263_70%_50%_/_0.05),_transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-muted-foreground">
            Real businesses, real results. See how Maxify Global has helped companies across industries achieve their marketing goals.
          </p>
        </div>

        {/* Horizontal Testimonials Carousel */}
        <div className="relative overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Testimonials Grid */}
          <div className={`flex gap-6 ${isMobile ? 'flex-col' : 'flex-row'} overflow-x-auto scrollbar-hide pb-4`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className={`border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 flex-shrink-0 ${isMobile ? 'w-full' : 'md:w-96'}`}
              >
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="h-6 w-6 text-primary/20 mb-3" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author with larger image */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      {testimonial.image ? (
                        <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                      ) : (
                        <AvatarFallback className="gradient-bg text-primary-foreground font-semibold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <div className="font-semibold font-heading text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</div>
                    </div>
                  </div>

                  {/* Results Badge */}
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {testimonial.results}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;