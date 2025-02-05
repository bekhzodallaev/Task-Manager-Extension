import React from 'react';
import styles from './LeftSidebar.module.scss';
import DashboardLogo from '../../../assets/DashboardAssets/taskmanagerLogo.png';
import homeLogo from '../../../assets/DashboardAssets/home.svg';
import listLogo from '../../../assets/DashboardAssets/list.svg';
import starLogo from '../../../assets/DashboardAssets/star.svg';
import completedLogo from '../../../assets/DashboardAssets/completed.svg';
function LeftSidebar({ openModal }) {
  return (
    <div className={styles.top_navbar}>
      <div className={styles.title_wrapper}>
        <img
          className={styles.logo_dashboard}
          src={DashboardLogo}
          alt="Dashboard Logo"
        />
        <h2>TaskManager</h2>
      </div>
      <ul>
        <li>
          <a href="http://">
            <img src={homeLogo} alt="" className={styles.home_logo} />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="http://">
            <img src={listLogo} alt="" />
            <span>Tasks to do</span>
          </a>
        </li>
        <li>
          <a href="http://">
            <img src={starLogo} alt="" />
            <span>Important</span>
          </a>
        </li>
        <li>
          <a href="http://">
            <img src={completedLogo} alt="" />
            <span>Completed</span>
          </a>
        </li>
      </ul>
      <button type="button" className={styles.btn_addtask} onClick={openModal}>
        Add New Task
      </button>
    </div>
  );
}

export default LeftSidebar;
