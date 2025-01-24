import React from 'react';
import styles from './DashboardHeader.module.scss';

function DashboardHeader() {
  return (
    <div className={styles.header_wrapper}>
      <div>
        <p>Wednesday, Jan 22 2025</p>
        <h3>Welcome Bekhzod</h3>
      </div>
      <input type="text" placeholder="Search tasks..." />
      <hr />
    </div>
  );
}

export default DashboardHeader;
