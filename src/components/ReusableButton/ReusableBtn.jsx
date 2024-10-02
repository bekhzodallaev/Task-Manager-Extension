import React from 'react';
import styles from './ReusableBtn.module.scss';
import LogoChrome from '@assets/FirstPageAssets/logos_chrome.svg';

const ReusableBtn = () => {
  return (
    <div>
      <button type="button" className={styles.reusable_btn}>
        <img src={LogoChrome} alt="Chrome Logo" />
        Add to Chrome - Its free
      </button>
    </div>
  );
};

export default ReusableBtn;
