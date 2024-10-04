import FirstPage from './components/FirstPage/FirstPage';
import Features from './components/FeaturesPage/Features';
import '@styles/global.scss';
import ReusableBtn from './components/ReusableButton/ReusableBtn';
import FaqSection from './components/FAQPage/FaqSection';
function App() {
  return (
    <>
      <FirstPage />
      <Features />
      <ReusableBtn />
      <FaqSection />
    </>
  );
}

export default App;
