import React from 'react';
import styles from './style.module.scss'

const hardWareShowCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className={styles.hardWareShowCard}
      >
        <div className={styles.hardWareShowCardTop}>
            <img src={imgUrl} className={styles.hardWareShowCardBg}></img>
        </div>
        <div className={styles.hardWareShowCardBottom}>
            <div className={styles.hardWareShowCardTitle}>{title}</div>
            <span className={styles.hardWareShowCardDesc}>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default hardWareShowCard;
