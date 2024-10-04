import React, { useState } from 'react';
import styles from './FaqSection.module.scss'; // CSS Module
import ClosedIcon from '@assets/FaqPageAssets/closed_icon.svg';
import OpenedIcon from '@assets/FaqPageAssets/open_icon.svg';
import classnames from 'classnames'; // For handling dynamic classes

const faqData = [
  {
    question: 'How do I install the task management extension?',
    answer:
      "You can install the extension from the Chrome Web Store. Simply search for our task management extension, click 'Add to Chrome,' and follow the prompts to complete the installation.",
  },
  {
    question: 'Can I set reminders and notifications for my tasks?',
    answer:
      'Yes, you can set specific reminders and receive Chrome notifications for upcoming deadlines or overdue tasks to help you stay on track.',
  },
  {
    question: 'Can I use the extension offline?',
    answer:
      "Yes, our extension supports offline access. You can view and manage your tasks even when you don't have an internet connection.",
  },
  {
    question: 'Is there a way to track the time I spend on tasks?',
    answer:
      'Yes, our extension includes a built-in timer feature. You can start the timer to track the time spent on each task, helping you monitor your productivity.',
  },
  {
    question: 'How do I create and organize tasks?',
    answer:
      'Click the extension icon in your browser toolbar to open the task manager. From there, you can create new tasks by entering the task name and details. Use categories and tags to organize your tasks for better visibility.',
  },
  {
    question: 'Can I customize the look and feel of the extension?',
    answer:
      'Yes, you can customize the extension with different themes, layouts, and even a dark mode. This allows you to personalize your task manager to suit your preferences.',
  },
];

const FaqSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className={styles.faq_container}>
      <button type="button">Frequently Asked Questions</button>
      <h1>Have questions? We have answers</h1>
      <p className={styles.explore_p}>
        Explore our FAQ for swift responses to commonly raised questions,
        ensuring clarity and ease of understanding.
      </p>
      <div className={styles.faq_items_container}>
        {faqData.map((faq, index) => (
          <div
            className={classnames(styles.faq_item, {
              [styles.open]: openFaqIndex === index,
            })}
            key={index}
          >
            <div
              className={styles.faq_question}
              onClick={() => toggleFaq(index)}
            >
              <p>{faq.question}</p>
              <div className={styles.arrow_icon}>
                <img
                  src={openFaqIndex === index ? OpenedIcon : ClosedIcon}
                  alt={openFaqIndex === index ? 'Opened' : 'Closed'}
                />
              </div>
            </div>
            <div className={styles.faq_answer}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
