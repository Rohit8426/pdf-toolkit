import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import PDFTools from "./components/pages/PDFTools";
import MergePDF from "./components/pages/MergePDF";
import SplitPDF from "./components/pages/SplitPDF";
import CompressPDF from "./components/pages/CompressPDF";
import ConvertToPDF from "./components/pages/ConvertToPDF";
import ConvertFromPDF from "./components/pages/ConvertFromPDF";
import AIResumeBuilder from "./components/AIResumeBuilder";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Auth from "./components/Auth";
import About from "./components/About";
import Careers from "./components/Careers";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Security from "./components/Security";
import Blog from "./components/Blog";
import Cookies from "./components/CookiePolicy";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<PDFTools />} />
          <Route path="/merge" element={<MergePDF />} />
          <Route path="/split-pdf" element={<SplitPDF />} />
          <Route path="/compress-pdf" element={<CompressPDF />} />
          <Route path="/word-to-pdf" element={<ConvertToPDF />} />
          <Route path="/pdf-to-excel" element={<ConvertFromPDF />} />
          <Route path="/resume-builder" element={<AIResumeBuilder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/security" element={<Security />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
