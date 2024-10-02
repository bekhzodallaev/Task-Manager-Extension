import React from 'react';
import styles from './Features.module.scss';

const Features = () => {
  return (
    <div className={styles.features_container}>
      <button type="button" className={styles.features_btn}>
        Features
      </button>
      <h1>Our Commitment to Excellence in Task Management</h1>
      <div className={styles.features_items_container}>
        <div className={styles.features_item}>
          <h3>Custom Organisation</h3>
          <p>
            Create custom categories and tags for better task organization,
            making it easier to find and manage your tasks.
          </p>
        </div>
        <div className={styles.features_item}>
          <h3>Flexible Management</h3>
          <p>
            Easily reorder tasks or move them between different categories with
            a simple drag and drop interface.
          </p>
        </div>
        <div className={styles.features_item}>
          <h3>Granular Tracking</h3>
          <p>
            Break down tasks into subtasks or add checklists for more detailed
            and manageable tracking.
          </p>
        </div>
        <div className={styles.features_item}>
          <h3>Monitor Your Time</h3>
          <p>
            Use the built-in timer feature to track the time spent on each task,
            helping you manage your time more efficiently.
          </p>
        </div>
        <div className={styles.features_item}>
          <h3>Visual Indicators</h3>
          <p>
            Track the completion status of your tasks and projects with visual
            progress bars, giving you a clear view of your progress.
          </p>
        </div>
        <div className={styles.features_item}>
          <h3>Easy Navigation</h3>
          <p>
            Quickly find and manage tasks with powerful search functionality and
            filters.
          </p>
        </div>
        <div className={styles.features_item}>
          <h3>Comfortable Viewing</h3>
          <p>
            Switch to dark mode for a visually comfortable experience,
            especially in low-light environments.
          </p>
        </div>
        <div className={styles.features_item}>
          <h3>Always Accessible</h3>
          <p>
            Access and manage your tasks even without an internet connection,
            ensuring you stay productive anywhere.
          </p>
        </div>
        <div className={styles.features_item}>
          <h3>Detailed Documentation</h3>
          <p>
            Add detailed notes and links to your tasks for better context and
            information management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
