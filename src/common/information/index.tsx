import React from 'react';
import styles from './index.module.less';

export const Information: React.FC = () => {
  return (
    <div className={styles.information}>
      <div className={styles.title}>
        图表有一思
      </div>
      <div className={styles.description}>
        <div className={styles.params}>
          是一个数字作品站点，他是一个开放的平台工具，我们希望它能够帮助到更多希望通过数据解决问题的人。
        </div>
        <div className={styles.params}>
          让人们在数据世界里获得视觉化思考能力。
        </div>
        <div className={styles.params}>
          让数据栩栩如生！
        </div>
      </div>
    </div>
  );
}
