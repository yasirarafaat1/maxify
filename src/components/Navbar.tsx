import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import maxifyLogo from "@/assets/maxify-logo.jpg";

const serviceLinks = [
  { name: "SEO", href: "/services/seo" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Meta Ads", href: "/services/meta-ads" },
  { name: "Google Ads", href: "/services/google-ads" },
  { name: "Social Media Management", href: "/services/social-media-management" },
  { name: "YouTube Ads", href: "/services/youtube-ads" },
  { name: "GMB Listing", href: "/services/gmb-listing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    const phoneNumber = "+917355553093"; // Updated with correct phone number
    const message = "Hello, I would like to know more about your services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={maxifyLogo} alt="Maxify Global" className="h-12 w-auto rounded-lg" />
            <span className="text-xl font-heading font-bold gradient-text">Maxify Global</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-muted-foreground font-medium ${isMobile ? '' : 'hover:text-foreground transition-colors'}`}>
              Home
            </Link>

            <Link to="/about" className={`text-muted-foreground font-medium ${isMobile ? '' : 'hover:text-foreground transition-colors'}`}>
              About
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 text-muted-foreground font-medium ${isMobile ? '' : 'hover:text-foreground transition-colors'}`}>
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link to={link.href} className="cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className={`text-muted-foreground font-medium ${isMobile ? '' : 'hover:text-foreground transition-colors'}`}>
              Contact
            </Link>
            <Button
              onClick={handleWhatsAppRedirect}
              className={`bg-green-500 text-white flex items-center gap-2 ${isMobile ? '' : 'hover:bg-green-600'}`}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <Link
              to="/"
              className={`block py-3 text-muted-foreground ${isMobile ? '' : 'hover:text-foreground transition-colors'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>


            <Link
              to="/about"
              className={`block py-3 text-muted-foreground ${isMobile ? '' : 'hover:text-foreground transition-colors'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <div>
              <button
                className={`flex items-center justify-between w-full py-3 text-muted-foreground ${isMobile ? '' : 'hover:text-foreground transition-colors'}`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 border-l border-border/50 ml-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`block py-2 text-muted-foreground ${isMobile ? '' : 'hover:text-foreground transition-colors'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`block py-3 text-muted-foreground ${isMobile ? '' : 'hover:text-foreground transition-colors'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button
              onClick={() => {
                handleWhatsAppRedirect();
                setIsOpen(false);
              }}
              className={`w-full mt-4 bg-green-500 text-white flex items-center gap-2 ${isMobile ? '' : 'hover:bg-green-600'}`}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;