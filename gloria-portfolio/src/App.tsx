import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import ThemeProvider from "./context/ThemeContext";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Proposals from "./pages/Proposals";
import ProposalPage from "./pages/ProposalPage";
import FintechCase from "./pages/FintechCase";
import EcomCase from "./pages/EcomCase";
import SaasCase from "./pages/SaasCase";
import CaseStudyPage from "./pages/CaseStudyPage";
import Resume from "./pages/Resume";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentCallback from "./pages/PaymentCallback";
import CourseCommerce from "./pages/CourseCommerce";
import DigitalVault from "./pages/DigitalVault";
import StudentPortal from "./pages/StudentPortal";
import DownloadCenter from "./pages/DownloadCenter";
import AnalyticsHQ from "./pages/AnalyticsHQ";
import AuditExperience from "./pages/AuditExperience";
import ROIEstimator from "./pages/ROIEstimator";
import Nav from "./components/Nav";
import PageTransition from "./components/PageTransition";
import FloatingWhatsApp from "./components/FloatingWhatsApp";


export default function App() {

  return (
    <ThemeProvider>
      <Router>
        <Nav />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/work"
              element={
                <PageTransition>
                  <Work />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/process"
              element={
                <PageTransition>
                  <Process />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route path="/work/fintech" element={<FintechCase />} />
            <Route path="/work/ecommerce" element={<EcomCase />} />
            <Route path="/work/saas" element={<SaasCase />} />
            <Route path="/case-study/:slug" element={<CaseStudyPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route
              path="/proposals"
              element={
                <PageTransition>
                  <Proposals />
                </PageTransition>
              }
            />
            <Route
              path="/proposal/:slug"
              element={
                <PageTransition>
                  <ProposalPage />
                </PageTransition>
              }
            />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment-callback" element={<PaymentCallback />} />
            <Route path="/courses" element={<CourseCommerce />} />
            <Route path="/vault" element={<DigitalVault />} />
            <Route path="/student" element={<StudentPortal />} />
            <Route path="/downloads" element={<DownloadCenter />} />
            <Route path="/analytics" element={<AnalyticsHQ />} />
            <Route path="/audit" element={<AuditExperience />} />
            <Route path="/roi" element={<ROIEstimator />} />
          </Routes>
        </AnimatePresence>
      </Router>
      <FloatingWhatsApp />
    </ThemeProvider>
  );
}
