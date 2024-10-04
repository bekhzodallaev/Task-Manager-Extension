import React from 'react';
import styles from './ContactPage.module.scss';

const ContactPage = () => {
  return (
    <div className={styles.contact_container}>
      <button type="button">Contact us</button>
      <h1>Let’s work together</h1>
      <p>
        Reach out, share your vision, and let the collaboration begin. Your
        success starts with a message.
      </p>
      <form action="" method="get">
        <div className={styles.info_detail}>
          <div className={styles.name_input}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className={styles.email_input}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
