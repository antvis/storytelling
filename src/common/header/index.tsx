import React from 'react';
import styles from './index.module.less';
import { Logo } from '../logo';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.btns}>
        <div className={`${styles.btn} ${styles.antv}`}>
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        </div>
        <div className={`${styles.btn} ${styles.github}`}></div>
        <div className={`${styles.btn} ${styles.yuque}`}></div>
        <div className={`${styles.btn} ${styles.weixin}`}></div>
      </div>
    </div>
  );
}
