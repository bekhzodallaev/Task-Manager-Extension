import React from 'react';
import styles from './DashboardHeader.module.scss';

function DashboardHeader() {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_texts}>
        <div className={styles.time_info}>
          <p>Wednesday, Jan 22 2025</p>
          <h3>Welcome Bekhzod</h3>
        </div>
        <input type="text" placeholder="Search tasks..." />
      </div>
      <hr />
      <div className={styles.tasks_list}>
        <div className={styles.lists_header}>
          <h2>All Tasks</h2>
          <div>
            <p>+</p>
          </div>
        </div>
        <div className={styles.task_placeholder}>
          <p>Add a task</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
