import React from 'react';
import DashboardHeader from './Header/DashboardHeader';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import styles from './Dashboard.module.scss';
function Dashboard() {
  return (
    <div className={styles.dashboard_wrapper}>
      <LeftSidebar />
      <DashboardHeader />
      <RightSidebar />
    </div>
  );
}

export default Dashboard;
