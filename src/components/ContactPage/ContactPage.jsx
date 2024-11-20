import React from 'react';
import styles from './ContactPage.module.scss';
import ReusableBtn from '../ReusableButton/ReusableBtn';

const ContactPage = () => {
  return (
    <div className={styles.contact_container} id="contact">
      <button type="button">Contact us</button>
      <h1>Let’s work together</h1>
      <p className={styles.text}>
        Reach out, share your vision, and let the collaboration begin. Your
        success starts with a message.
      </p>
      <form action="" method="get">
        <div className={styles.info_detail}>
          <div className={styles.name_input}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" id="name" />
          </div>
          <div className={styles.email_input}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              id="email"
            />
          </div>
        </div>
        <div className={styles.form_area}>
          <label htmlFor="area">Message</label>
          <textarea
            name="area"
            id="area"
            rows={5}
            cols={33}
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button type="submit" className={styles.submit_btn}>
          Submit
        </button>
      </form>
      <div className={styles.field_page}>
        <h1>Unleash your true potential</h1>
        <ReusableBtn />
      </div>
    </div>
  );
};

export default ContactPage;
