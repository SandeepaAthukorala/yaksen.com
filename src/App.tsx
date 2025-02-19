
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import TeamMemberPage from "./pages/team/TeamMemberPage";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsConditions from "./pages/policies/TermsConditions";
import RefundPolicy from "./pages/policies/RefundPolicy";
import HelpCenter from "./pages/support/HelpCenter";
import FAQ from "./pages/support/FAQ";
import AdminServices from "./admin/dashboard/pages/AdminServices";
import AdminProjects from "./admin/dashboard/pages/AdminProjects";
import AdminTestimonials from "./admin/dashboard/pages/AdminTestimonials";
import AdminMembers from "./admin/dashboard/pages/AdminMembers";
import AdminUsers from "./admin/dashboard/pages/AdminUsers";
import Login from "./admin/auth/login/Login";
import Register from "./admin/auth/register/Register";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import ChatBot from "./bot/bot"

import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/team/:id" element={<TeamMemberPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="/admin/projects" element={<AdminProjects />} />
            <Route path="/admin/testimonials" element={<AdminTestimonials />} />
            <Route path="/admin/members" element={<AdminMembers />} />
            <Route path="/admin/users" element={<AdminUsers />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <ChatBot/>
    </ThemeProvider>
  );
}

