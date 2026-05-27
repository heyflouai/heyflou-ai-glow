import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Healthcare from "./pages/services/Healthcare";
import FitnessEducation from "./pages/services/FitnessEducation";
import CustomAutomation from "./pages/services/CustomAutomation";
import Consulting from "./pages/services/Consulting";
import TravelAgencies from "./pages/services/TravelAgencies";
import Agents from "./pages/services/Agents";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Calculator from "./pages/Calculator";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Navbar />
            <main className="flex-1 overflow-x-hidden">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/healthcare" element={<Healthcare />} />
                <Route path="/services/fitness-education" element={<FitnessEducation />} />
                <Route path="/services/custom" element={<CustomAutomation />} />
                <Route path="/services/consulting" element={<Consulting />} />
                <Route path="/services/agents" element={<Agents />} />
                <Route path="/services/travel-agencies" element={<TravelAgencies />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/refund" element={<Refund />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
