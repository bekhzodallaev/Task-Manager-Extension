import React from 'react';
import styles from './TestimonialsPage.module.scss';

const testimonialsData = [
  {
    answer:
      'TaskMaster has completely transformed the way I organize my day. The intuitive design and powerful features make it easy to stay on top of everything.',
    author: 'Sarah M.',
  },
  {
    answer:
      ' The customization options are fantastic! I love being able to choose different themes and layouts to create a workspace that’s perfect for me. The dark mode is a great touch too.',
    author: 'John D.',
  },
  {
    answer:
      'The reminders and notifications are a lifesaver. I used to miss deadlines all the time, but now I’m always on track. The recurring tasks feature is also incredibly convenient.',
    author: 'Emma T.',
  },
  {
    answer:
      'Offline access is a game-changer. I can work on my tasks even when I don’t have internet, which is perfect for my on-the-go lifestyle. Plus, the gamification elements make it fun to stay productive',
    author: 'Michael S.',
  },
  {
    answer:
      'TaskMaster’s time tracking feature has helped me understand how I spend my time and improve my productivity. It’s amazing to see how much more I can accomplish with this tool!',
    author: 'Lisa K.',
  },
];
const TestimonialsPage = () => {
  return (
    <div className={styles.testimonials_container}>
      <button type="button">Testimonials</button>
      <h1>Don't take our word for it.See what our users say.</h1>
      <div className={styles.testimonials_item_container}>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`${styles.testimonial_item} item${index + 1}`}
          >
            <p>{testimonial.answer}</p>
            <div className={styles.author_container}>
              <div className={styles.profile}></div>
              <h3>{testimonial.author}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
