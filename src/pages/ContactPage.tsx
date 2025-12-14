import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const office = {
  city: "Indore",
  address: "E 07 Shriram Chauraha Near Sarthak Atta Chakki, Kalindi Gold City Jakhiya, Shri Aurobindo, Indore 453555",
  phone: "+91 73555 53093",
  email: "support@maxifyglobal.in",
};

const ContactPage = () => {
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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2 mb-6">
              Let's Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear from you.
              Reach out and let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.627475847083!2d75.878725!3d22.629715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcd5059c754f%3A0x9f0b4e4d4e4e4e4e!2sKalindi%20Gold%20City%2C%20Jakhiya%2C%20Indore%2C%20Madhya%20Pradesh%20453555!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maxify Global Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground">
              We're here to help you grow your business. Reach out to us through any of these channels.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className={`p-8 rounded-2xl bg-card border border-border/50 transition-all duration-300 ${isMobile ? '' : 'hover:-translate-y-2 hover:shadow-xl'}`}>
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary">{office.city}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground cursor-pointer ${isMobile ? '' : 'hover:text-primary transition-colors'}`}
                  >
                    {office.address}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}
                    className={`text-muted-foreground cursor-pointer ${isMobile ? '' : 'hover:text-primary transition-colors'}`}
                  >
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href={`mailto:${office.email}`}
                    className={`text-muted-foreground cursor-pointer ${isMobile ? '' : 'hover:text-primary transition-colors'}`}
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
              <Clock className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM (IST) |
                Saturday: 10:00 AM - 2:00 PM | Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;