import styles from "./Header.module.scss";
// import { ReactComponent as LogoSteam } from "@assets/HeaderAssets/logo-steam.svg"; // Using the alias
import LogoSteam from "@assets/HeaderAssets/logo-steam.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* <LogoSteam /> */}
        <img src={LogoSteam} alt="LogoSteam" />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#features" aria-current="page">
              Features
            </a>
          </li>
          <li>
            <a href="#whyus">Why Us</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.login}>
        <ul>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
        <button type="button">Add to Chrome</button>
      </div>
    </header>
  );
};

export default Header;
