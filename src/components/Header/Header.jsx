import styles from './Header.module.scss';
// import { ReactComponent as LogoSteam } from "@assets/HeaderAssets/logo-steam.svg"; // Using the alias
import LogoSteam from '@assets/HeaderAssets/logo-steam.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

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
          <li onClick={handleLogin}>
            <a href="#login">Login</a>
          </li>
        </ul>
        <a href="https://chromewebstore.google.com/" target="_blank">
          <button type="button">Add to Chrome</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
