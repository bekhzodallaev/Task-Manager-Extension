import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';
import Features from './components/FeaturesPage/Features';
import '@styles/global.scss';
import ReusableBtn from './components/ReusableButton/ReusableBtn';
import FaqSection from './components/FAQPage/FaqSection';
import ContactPage from './components/ContactPage/ContactPage';
import TestimonialsPage from './components/TestimonialsPage/TestimonialsPage';
import FooterPage from './components/FooterPage/FooterPage';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <FirstPage />
              <Features />
              <ReusableBtn />
              <FaqSection />
              <TestimonialsPage />
              <ContactPage />
              <FooterPage />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
