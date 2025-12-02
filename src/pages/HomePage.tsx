import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Testimonials />
            {/* <Contact /> */}
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default HomePage;