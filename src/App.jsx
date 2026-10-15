import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';

// Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import EasyApplyModal from './components/EasyApplyModal';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import BlogDetail from './pages/BlogDetail';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Jobs from './pages/Jobs';
import JobSeeker from './pages/JobSeeker';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ModalProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <TopBar />
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/contract-staffing" element={<Navigate to="/services/contract-staffing" replace />} />
              <Route path="/permanent-staffing" element={<Navigate to="/services/permanent-staffing" replace />} />
              <Route path="/executive-search" element={<Navigate to="/services/executive-search" replace />} />
              <Route path="/ai-services" element={<Navigate to="/services/ai-services" replace />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/:slug" element={<IndustryDetail />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
              <Route path="/blogs" element={<Navigate to="/insights" replace />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobseeker" element={<JobSeeker />} />
              <Route path="/job-seeker" element={<JobSeeker />} />
              <Route path="/job-seekers" element={<JobSeeker />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsConditions />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />

          {/* Global Modals & Notifications */}
          <ResumeModal />
          <EasyApplyModal />
          <Toast />
        </div>
      </ModalProvider>
    </Router>
  );
}
