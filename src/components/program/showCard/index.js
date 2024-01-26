import React from 'react';
import styles from './style.module.scss'

const showCard = ({ imgUrl, iconUrl, title, description }) => {
  return (
    <div>
      <div
        className={styles.showCard}
      >
        <div className={styles.showCardTop}>
            <img src={imgUrl} className={styles.showCardBg}></img>
            <img src={iconUrl} className={styles.showCardIcon}></img>
        </div>
        <div className={styles.showCardBottom}>
            <div className={styles.showCardTitle}>{title}</div>
            <span className={styles.showCardDesc}>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default showCard;
