import React from 'react';
import styles from './RightSidebar.module.scss';
import ringbellIcon from '../../../assets/DashboardAssets/ringbell.svg';
import settingsIcon from '../../../assets/DashboardAssets/settings.svg';
import logoutIcon from '../../../assets/DashboardAssets/logout.svg';
import profileIcon from '../../../assets/DashboardAssets/profile.png';
function RightSidebar() {
  return (
    <div className={styles.rightsidebar_wrapper}>
      <div className={styles.settings}>
        <img src={ringbellIcon} className={styles.ringbell} alt="" />
        <img src={settingsIcon} className={styles.settings_icon} alt="" />
        <img src={logoutIcon} className={styles.logout_icon} alt="" />
      </div>
      <div className={styles.profile}>
        <p>Bekhzod</p>
        <div className={styles.profile_img_wrapper}>
          <img src={profileIcon} className={styles.profile_icon} alt="" />
        </div>
      </div>
      <div className={styles.task_stats_wrapper}>
        <p className={styles.title}>Task Status</p>
        <div className={styles.stats_list}>
          <div className={styles.total}>
            <p>Total</p>
            <div>
              <p>0</p>
            </div>
          </div>
          <div className={styles.completed}>
            <p>Completed</p>
            <div>
              <p>0</p>
            </div>
          </div>
          <div className={styles.pending}>
            <p>Pending</p>
            <div>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
