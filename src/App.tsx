import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "@/i18n";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CustomAutomation from "./pages/services/CustomAutomation";
import Consulting from "./pages/services/Consulting";
import Agents from "./pages/services/Agents";
import Infrastructure from "./pages/services/Infrastructure";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Calculator from "./pages/Calculator";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AgenticAiImplementationGuide from "./pages/blog/AgenticAiImplementationGuide";
import { SpanishRoute } from "@/components/i18n/SpanishRoute";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // allow in-page anchor navigation
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Navbar />
            <main className="flex-1 overflow-x-hidden">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/custom" element={<CustomAutomation />} />
                <Route path="/services/consulting" element={<Consulting />} />
                <Route path="/services/agents" element={<Agents />} />
                <Route path="/services/infrastructure" element={<Infrastructure />} />
                {/* Retired industry pages — redirect to the services hub */}
                <Route path="/services/healthcare" element={<Navigate to="/services" replace />} />
                <Route path="/services/fitness-education" element={<Navigate to="/services" replace />} />
                <Route path="/services/travel-agencies" element={<Navigate to="/services" replace />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/refund" element={<Refund />} />
                <Route path="/blog/agentic-ai-implementation-guide" element={<AgenticAiImplementationGuide />} />
                {/* Spanish (es-MX) versions */}
                <Route path="/es" element={<SpanishRoute><Home /></SpanishRoute>} />
                <Route path="/es/servicios" element={<SpanishRoute><Services /></SpanishRoute>} />
                <Route path="/es/precios" element={<SpanishRoute><Pricing /></SpanishRoute>} />
                <Route path="/es/contacto" element={<SpanishRoute><Contact /></SpanishRoute>} />
                {/* English-slug aliases under /es */}
                <Route path="/es/services" element={<Navigate to="/es/servicios" replace />} />
                <Route path="/es/pricing" element={<Navigate to="/es/precios" replace />} />
                <Route path="/es/contact" element={<Navigate to="/es/contacto" replace />} />
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
