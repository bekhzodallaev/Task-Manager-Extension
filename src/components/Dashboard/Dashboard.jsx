import React from 'react';
import { useState } from 'react';
import DashboardHeader from './Header/DashboardHeader';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import TaskCreateModal from './ModalWindow/TaskCreateModal';
import styles from './Dashboard.module.scss';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div
      className={`${styles.dashboard_wrapper} ${
        isModalOpen ? styles.modal_open : ''
      }`}
    >
      <LeftSidebar openModal={openModal} />
      <DashboardHeader openModal={openModal} />
      <RightSidebar />

      {isModalOpen && (
        <div className={styles.modal_wrapper}>
          <TaskCreateModal closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
