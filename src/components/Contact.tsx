import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Contact = () => {
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

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+917355553093";
    const message = "Hello, I would like to get in touch with Maxify Global.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-6">
              Let's Create <span className="gradient-text">Something Great</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to take your digital presence to the next level? We'd love to hear
              about your project. Reach out and let's start a conversation.
            </p>
          </div>

          {/* Contact Info Card */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Single Office Location */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Our Office</h3>
                  <p className="text-muted-foreground">
                    E 07 Shriram Chauraha Near Sarthak Atta Chakki,
                    Kalindi Gold City Jakhiya, Shri Aurobindo Indore 453555
                  </p>
                </div>

                {/* Phone */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+91 73555 53093</p>
                </div>

                {/* Email */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">hello@maxifyglobal.com</p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-border/50 text-center">
                <h3 className="text-2xl font-heading font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Connect with our experts today and discover how our digital marketing solutions
                  can accelerate your business growth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className={`gradient-bg transition-all group px-8 py-6 text-lg font-bold ${isMobile ? '' : 'hover:opacity-90 transform hover:scale-105 hover:shadow-xl'}`}
                    onClick={handleWhatsAppRedirect}
                  >
                    Start Conversation on WhatsApp
                    <ArrowRight className={`ml-2 h-5 w-5 ${isMobile ? '' : 'group-hover:translate-x-1'} transition-transform`} />
                  </Button>

                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className={`group px-8 py-6 text-lg font-bold ${isMobile ? '' : 'hover:opacity-90 transform hover:scale-105 hover:shadow-xl'}`}
                    >
                      Need Help? Contact Us
                      <ArrowRight className={`ml-2 h-5 w-5 ${isMobile ? '' : 'group-hover:translate-x-1'} transition-transform`} />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;