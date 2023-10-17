import React from 'react';

import styles from './index.module.less';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span>Made with ❤️</span>
      <span className={styles.author}>by<a href="https://github.com/antvis" style={{ marginLeft:4 }} target="_blank">AntV</a></span>
    </footer>
  );
}
