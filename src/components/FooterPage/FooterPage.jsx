import React from 'react';
import styles from './FooterPage.module.scss';
import TwitterLogo from '@assets/FooterAssets/twitter.svg';
import InstaLogo from '@assets/FooterAssets/instagram.svg';
import TelegramLogo from '@assets/FooterAssets/telegram.svg';
import LinkedinLogo from '@assets/FooterAssets/linkedin.svg';
import WhatsAppLogo from '@assets/FooterAssets/whatsapp.svg';

const FooterPage = () => {
  return (
    <div className={styles.footer_parent}>
      <div className={styles.footer_container}>
        <h1>We're Here to Help You Achieve More</h1>
        <p>Subscribe to our newsletter</p>
        <div className={styles.subscribe_container}>
          <form action="" method="get">
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button type="submit" className={styles.subscribe_btn}>
              Subscribe
            </button>
          </form>
        </div>
        <div className={styles.contact_container}>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#whyus">Why us</a>
            </li>

            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className={styles.social_contact}>
            <div>
              <a href="https://x.com/?lang=en" target="_blank">
                <img src={TwitterLogo} alt="" />
              </a>
            </div>
            <div>
              <a href=" https://www.instagram.com/" target="_blank">
                <img src={InstaLogo} alt="" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/bekallaev/" target="_blank">
                <img src={LinkedinLogo} alt="" />
              </a>
            </div>
            <div>
              <a href="https://web.whatsapp.com/" target="_blank">
                <img src={WhatsAppLogo} alt="" />
              </a>
            </div>
            <div>
              <a href="https://web.telegram.org/a/" target="_blank">
                <img src={TelegramLogo} alt="" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className={styles.rights_text}>
          © 2024 Task Manager Extension. All rights reserved. Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default FooterPage;
