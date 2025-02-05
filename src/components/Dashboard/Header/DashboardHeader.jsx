import React from 'react';
import styles from './DashboardHeader.module.scss';
import TaskCreateModal from '../ModalWindow/TaskCreateModal';

function DashboardHeader({ isModalOpen, openModal, closeModal }) {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_texts}>
        <div className={styles.time_info}>
          <p>Wednesday, Jan 22 2025</p>
          <h3>Welcome Bekhzod</h3>
        </div>
        <input
          type="text"
          placeholder="Search tasks..."
          className={styles.search_input}
        />
      </div>
      <hr />
      <div className={styles.tasks_list}>
        <div className={styles.lists_header}>
          <h2>All Tasks</h2>
          <div onClick={openModal}>
            <p>+</p>
          </div>
        </div>
        <div className={styles.task_placeholder} onClick={openModal}>
          <p>Add a task</p>
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modal_window}>
          <TaskCreateModal closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}

export default DashboardHeader;
