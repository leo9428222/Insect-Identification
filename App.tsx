
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Database from './pages/Database';
import Pricing from './pages/Pricing';
import Community from './pages/Community';
import Download from './pages/Download';

// Remaining Placeholder Pages for demonstration
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 min-h-[70vh]">
    <h1 className="text-4xl font-bold mb-8 text-charcoal">{title}</h1>
    <div className="bg-cream rounded-3xl p-12 text-center text-warmgray border-2 border-dashed border-warmgray/20">
      <p className="text-xl">Content for the {title} page will be rendered here.</p>
      <p className="mt-4">This page is part of the comprehensive BugScope ecosystem.</p>
    </div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-charcoal antialiased">
      <ScrollToTop />
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<Database />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/download" element={<Download />} />
          
          {/* Sub-pages */}
          <Route path="/blog" element={<PlaceholderPage title="Insect Insights Blog" />} />
          <Route path="/support" element={<PlaceholderPage title="Help Center" />} />
          <Route path="/about" element={<PlaceholderPage title="About BugScope" />} />
          <Route path="/educators" element={<PlaceholderPage title="For Educators" />} />
          <Route path="/conservation" element={<PlaceholderPage title="Conservation & Impact" />} />
          <Route path="/api" element={<PlaceholderPage title="API Documentation" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
