import FirstPage from './components/FirstPage/FirstPage';
import Features from './components/FeaturesPage/Features';
import '@styles/global.scss';
import ReusableBtn from './components/ReusableButton/ReusableBtn';
import FaqSection from './components/FAQPage/FaqSection';
import ContactPage from './components/ContactPage/ContactPage';
import TestimonialsPage from './components/TestimonialsPage/TestimonialsPage';
import FooterPage from './components/FooterPage/FooterPage';
function App() {
  return (
    <>
      <FirstPage />
      <Features />
      <ReusableBtn />
      <FaqSection />
      <TestimonialsPage />
      <ContactPage />
      <FooterPage />
    </>
  );
}

export default App;
