
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/utils/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import DMCA from "./pages/DMCA";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GameInstructions from "./pages/GameInstructions";
import TeamManagement from "./pages/TeamManagement";
import TipsAndTricks from "./pages/TipsAndTricks";
import FAQ from "./pages/FAQ";
import Achievements from "./pages/Achievements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/game-instructions" element={<GameInstructions />} />
            <Route path="/team-management" element={<TeamManagement />} />
            <Route path="/tips-and-tricks" element={<TipsAndTricks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
