import React from 'react';
import styles from './TaskCreateModal.module.scss';

function TaskCreateModal({ closeModal }) {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_title}>
        <h2>Create a Task</h2>
        <div className={styles.close_modal_btn} onClick={closeModal}>
          X
        </div>
      </div>
      <div className={styles.title_input}>
        <label for="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter a title"
        />
      </div>
      <div className={styles.description_area}>
        <label for="description">Description</label>
        <br />
        <textarea
          name=""
          id=""
          cols={50}
          rows={6}
          placeholder="Enter a description"
        ></textarea>
      </div>
      <div className={styles.checkbox_btn}>
        <input type="checkbox" id="important" name="important" />
        <label for="important">Mark as Important</label>
      </div>
      <button type="button" className={styles.add_task_btn}>
        Add Task
      </button>
    </div>
  );
}

export default TaskCreateModal;
