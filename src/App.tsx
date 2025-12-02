import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SEOPage from "./pages/services/SEOPage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import MetaAdsPage from "./pages/services/MetaAdsPage";
import GoogleAdsPage from "./pages/services/GoogleAdsPage";
import SocialMediaManagementPage from "./pages/services/SocialMediaManagementPage";
import YouTubeAdsPage from "./pages/services/YouTubeAdsPage";
import GMBListingPage from "./pages/services/GMBListingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/meta-ads" element={<MetaAdsPage />} />
          <Route path="/services/google-ads" element={<GoogleAdsPage />} />
          <Route path="/services/social-media-management" element={<SocialMediaManagementPage />} />
          <Route path="/services/youtube-ads" element={<YouTubeAdsPage />} />
          <Route path="/services/gmb-listing" element={<GMBListingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;