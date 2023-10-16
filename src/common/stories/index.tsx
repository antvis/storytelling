import React from 'react';
import styles from './index.module.less';

export const Stories: React.FC = () => {
  return (
    <div className={styles.stories}>
      <div className={styles.name}>
        我们的数据故事
      </div>
      <div className={styles.list}>
        <div className={styles.story}>
          <div className={styles.container}>
            <div className={styles.screenshot}>
              <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*rHMLQZ6xI6wAAAAAAAAAAAAADmJ7AQ/original" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                “数”说杭州亚运会，带你盘点亚运会中的“数据冷知识”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
