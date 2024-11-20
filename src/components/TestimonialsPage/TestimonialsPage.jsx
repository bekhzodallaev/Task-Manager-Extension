import React from 'react';
import styles from './TestimonialsPage.module.scss';

const testimonialsData = [
  {
    answer:
      'TaskMaster has completely transformed the way I organize my day. The intuitive design and powerful features make it easy to stay on top of everything.',
    author: 'Sarah M.',
    image:
      'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
  },
  {
    answer:
      ' The customization options are fantastic! I love being able to choose different themes and layouts to create a workspace that’s perfect for me. The dark mode is a great touch too.',
    author: 'John D.',
    image:
      'https://media.gettyimages.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=',
  },
  {
    answer:
      'The reminders and notifications are a lifesaver. I used to miss deadlines all the time, but now I’m always on track. The recurring tasks feature is also incredibly convenient.',
    author: 'Emma T.',
    image:
      'https://media.gettyimages.com/id/1305462732/photo/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=T0R-pAmJJpErWc8hE0jSJnmptUFQ5MvtPX7NPJJln9s=',
  },
  {
    answer:
      'Offline access is a game-changer. I can work on my tasks even when I don’t have internet, which is perfect for my on-the-go lifestyle. Plus, the gamification elements make it fun to stay productive',
    author: 'Michael S.',
    image:
      'https://media.gettyimages.com/id/1131285202/photo/portrait-of-a-handsome-man.jpg?s=612x612&w=0&k=20&c=K5T7kLqASJI7vqIO26X9OMwSuOhJAlemc4KUEEQjT6c=',
  },
  {
    answer:
      'TaskMaster’s time tracking feature has helped me understand how I spend my time and improve my productivity. It’s amazing to see how much more I can accomplish with this tool!',
    author: 'Lisa K.',
    image:
      'https://media.gettyimages.com/id/1394891652/photo/build-your-people-to-grow-your-company-portrait-of-young-female-businesswomen-in-a-fin-tech.jpg?s=612x612&w=0&k=20&c=rOs_oVRvIOyLeIRiCvRBSgEvBF5F-A4_aqMWgfBkGq0=',
  },
];
const TestimonialsPage = () => {
  return (
    <div className={styles.testimonials_container} id="whyus">
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
              <div className={styles.profile}>
                <img
                  src={testimonial.image}
                  alt=""
                  className={styles.profile_img}
                />
              </div>
              <h3>{testimonial.author}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
