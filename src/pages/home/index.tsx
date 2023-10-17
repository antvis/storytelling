import React from 'react';
import { Header } from '../../common';
import { Information } from '../../common';
import { Stories } from '../../common';
import { Footer } from '../../common';

import styles from './index.module.less';

export const Home: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Information />
      <Stories />
      <Footer />
    </div>
  );
}
