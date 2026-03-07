import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import IndustriesPage from "./pages/IndustriesPage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from "./pages/ResourcesPage";
import NotFoundPage from "./pages/NotFoundPage";

/* Solutions Pages */
import BusinessIntelligencePage from "./pages/solutions/BusinessIntelligencePage";
import DataMigrationPage from "./pages/solutions/DataMigrationPage";
import GenAIPage from "./pages/solutions/GenAIPage";

/* Industry Pages */
import HealthcarePage from "./pages/industries/HealthcarePage";
import RetailPage from "./pages/industries/RetailPage";
import FinancePage from "./pages/industries/FinancePage";
import TravelHospitalityPage from "./pages/industries/TravelHospitalityPage";

/* React Query Client */
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      <Toaster />
      <Sonner />

      {/* IMPORTANT: basename fixes routing on GitHub Pages */}
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>

        <Navbar />

        <main>
          <Routes>

            {/* Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* Main Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcesPage />} />

            {/* Solutions */}
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route
              path="/solutions/business-intelligence"
              element={<BusinessIntelligencePage />}
            />
            <Route
              path="/solutions/data-migration"
              element={<DataMigrationPage />}
            />
            <Route
              path="/solutions/genai"
              element={<GenAIPage />}
            />

            {/* Industries */}
            <Route path="/industries" element={<IndustriesPage />} />
            <Route
              path="/industries/healthcare"
              element={<HealthcarePage />}
            />
            <Route
              path="/industries/retail"
              element={<RetailPage />}
            />
            <Route
              path="/industries/finance"
              element={<FinancePage />}
            />
            <Route
              path="/industries/travel-hospitality"
              element={<TravelHospitalityPage />}
            />

            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </main>

        <Footer />

      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
