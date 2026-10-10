import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// AnimatePresence is intentionally not imported here to avoid large initial bundle.
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const Services = lazy(() => import('./pages/Services'));
const Process = lazy(() => import('./pages/Process'));
const Contact = lazy(() => import('./pages/Contact'));
const Proposals = lazy(() => import('./pages/Proposals'));
const ProposalPage = lazy(() => import('./pages/ProposalPage'));
const FintechCase = lazy(() => import('./pages/FintechCase'));
const EcomCase = lazy(() => import('./pages/EcomCase'));
const SaasCase = lazy(() => import('./pages/SaasCase'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const Resume = lazy(() => import('./pages/Resume'));
const About = lazy(() => import('./pages/About'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const PaymentCallback = lazy(() => import('./pages/PaymentCallback'));
const CourseCommerce = lazy(() => import('./pages/CourseCommerce'));
const DigitalVault = lazy(() => import('./pages/DigitalVault'));
const StudentPortal = lazy(() => import('./pages/StudentPortal'));
const DownloadCenter = lazy(() => import('./pages/DownloadCenter'));
const AnalyticsHQ = lazy(() => import('./pages/AnalyticsHQ'));
const AuditExperience = lazy(() => import('./pages/AuditExperience'));
const ROIEstimator = lazy(() => import('./pages/ROIEstimator'));
import Nav from "./components/Nav";
const PageTransition = lazy(() => import('./components/PageTransition'));
const FloatingWhatsApp = React.lazy(() => import('./components/FloatingWhatsApp'));
const NotFound = lazy(() => import('./pages/NotFound'));
import Footer from './components/Footer';


export default function App() {

  return (
    <>
      <Router>
        <Nav />
        <main id="main-content">
          <Suspense fallback={<div aria-busy="true">Loading…</div>}>
            <>
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
                  path="/about"
                  element={
                    <PageTransition>
                      <About />
                    </PageTransition>
                  }
                />
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </>
          </Suspense>
        </main>
        <Footer />
      </Router>
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </>
  );
}
