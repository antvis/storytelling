import React from 'react';
import { Header } from './common';
import { Information } from './common';
import { Stories } from './common';
import { Footer } from './common';


import styles from './app.module.less';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Information />
      <Stories />
      <Footer />
    </div>
  );
}
