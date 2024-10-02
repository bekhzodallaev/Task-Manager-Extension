import styles from './FirstPage.module.scss';
import Header from '../Header/Header';
import ReusableBtn from '../ReusableButton/ReusableBtn';

const FirstPage = () => {
  return (
    <div className={styles.firstPage}>
      <Header />
      <h1>Stay Organized and Boost Your Productivity</h1>
      <p>Manage tasks effortlessly with our Chrome extension</p>
      <ReusableBtn />
      <div className={styles.thumbnail}></div>
    </div>
  );
};

export default FirstPage;
