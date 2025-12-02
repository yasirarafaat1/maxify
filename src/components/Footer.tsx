import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import maxifyLogo from "@/assets/maxify-logo.jpg";
import { useEffect, useState } from "react";

const footerLinks = {
  services: [
    { name: "SEO", href: "/services/seo" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Meta Ads", href: "/services/meta-ads" },
    { name: "Google Ads", href: "/services/google-ads" },
    { name: "Social Media Management", href: "/services/social-media-management" },
    { name: "YouTube Ads", href: "/services/youtube-ads" },
    { name: "GMB Listing", href: "/services/gmb-listing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1Cs8HL6xGk", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@maxifyglobaltech?si=H83qRG9xv9mKhBhA", label: "Youtube" },
  { icon: Instagram, href: "https://www.instagram.com/maxify602?igsh=OThoZDg4MXpiam5o", label: "Instagram" },
];

const contactInfo = [
  { icon: MapPin, text: "E 07 Shriram Chauraha, Indore 453555" },
  { icon: Phone, text: "+91 73555 53093" },
  { icon: Mail, text: "support@maxifyglobal.in" },
];

const Footer = () => {
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
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={maxifyLogo} alt="Maxify Global" className="h-10 w-auto rounded-lg" />
              <span className="text-xl font-heading font-bold">Maxify Global</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Empowering businesses with innovative digital marketing solutions
              that drive real growth and measurable results.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <info.icon className="h-5 w-5 text-background/70 flex-shrink-0 mt-0.5" />
                  <span className="text-background/70 text-sm">{info.text}</span>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-background/10 flex items-center justify-center transition-all group ${isMobile ? '' : 'hover:bg-primary transform hover:scale-110 hover:-translate-y-1'}`}
                  aria-label={social.label}
                >
                  <social.icon className={`h-5 w-5 transition-colors ${isMobile ? '' : 'group-hover:text-white'}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`text-background/70 transition-colors inline-block ${isMobile ? '' : 'hover:text-background hover:translate-x-1'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`text-background/70 transition-colors inline-block ${isMobile ? '' : 'hover:text-background hover:translate-x-1'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Maxify Global. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className={`text-background/60 transition-colors ${isMobile ? '' : 'hover:text-background hover:underline'}`}>Privacy Policy</Link>
            <Link to="/terms-of-service" className={`text-background/60 transition-colors ${isMobile ? '' : 'hover:text-background hover:underline'}`}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;