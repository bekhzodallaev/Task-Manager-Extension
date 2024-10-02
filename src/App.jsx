import FirstPage from './components/FirstPage/FirstPage';
import Features from './components/FeaturesPage/Features';
import '@styles/global.scss';
import ReusableBtn from './components/ReusableButton/ReusableBtn';
function App() {
  return (
    <>
      <FirstPage />
      <Features />
      <ReusableBtn />
    </>
  );
}

export default App;
