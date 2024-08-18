import styles from "./FirstPage.module.scss";
import Header from "../Header/Header";
import LogoChrome from "@assets/FirstPageAssets/logos_chrome.svg";

const FirstPage = () => {
  return (
    <div className={styles.firstPage}>
      <Header />
      <h1>Stay Organized and Boost Your Productivity</h1>
      <p>Manage tasks effortlessly with our Chrome extension</p>
      <button type="button">
        <img src={LogoChrome} alt="Chrome Logo" />
        Add to Chrome - Its free
      </button>
      <div className={styles.thumbnail}></div>
    </div>
  );
};

export default FirstPage;
