import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import SoftwareSolutionsPage from "./pages/services/SoftwareSolutionsPage";
import AutomationPage from "./pages/services/AutomationPage";
import AIPersonalBrandingPage from "./pages/services/AIPersonalBrandingPage";
import SmartVisualDesignPage from "./pages/services/SmartVisualDesignPage";
import WorkflowWizardPage from "./pages/services/WorkflowWizardPage";
import GarmentApparelPage from "./pages/industries/GarmentApparelPage";
import TeamMemberPage from "./pages/team/TeamMemberPage";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsConditions from "./pages/policies/TermsConditions";
import RefundPolicy from "./pages/policies/RefundPolicy";
import HelpCenter from "./pages/support/HelpCenter";
import FAQ from "./pages/support/FAQ";
import ProtectedRoute from "./components/protected/ProtectedRoute";

import NotFound from "./pages/NotFound";
import ChatBot from "./chatbot/Chatbot";

function InhumanSpotifyRedirect() {
  window.location.href = "https://open.spotify.com/artist/3iSPNGQSuyncDeurJktdB2";
  return null;
}

function InhumanYoutubeRedirect() {
  window.location.href = "https://music.youtube.com/channel/UC1rWZW2MM5hVzIVqlpNHQUA";
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/custom-software" element={<SoftwareSolutionsPage />} />
          <Route path="/services/process-optimization" element={<AutomationPage />} />
          <Route path="/services/ai-personal-branding" element={<AIPersonalBrandingPage />} />
          <Route path="/services/smart-visual-design" element={<SmartVisualDesignPage />} />
          <Route path="/services/workflow-wizard" element={<WorkflowWizardPage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/industries/garment-apparel" element={<GarmentApparelPage />} />
          <Route path="/team/:id" element={<TeamMemberPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/inhuman-spotify" element={<InhumanSpotifyRedirect />} /> {/* Redirect path */}
          <Route path="/inhuman-youtube-music" element={<InhumanYoutubeRedirect />} /> {/* Redirect path */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ChatBot />
    </ThemeProvider>
  );
}
