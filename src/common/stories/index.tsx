import React from 'react';
import { StoryMetas } from '../../stories';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

const Colors = [
  '#b2a1f7',
  '#b8cbe0',
  '#b1e7e3',
  '#fba89d',
  '#f4f4a4',
  '#bcb5e3',
  '#e5c4b3',
]

export const Stories: React.FC = () => {
  return (
    <div className={styles.stories}>
      <div className={styles.name}>
        我们的数据故事
      </div>
      <div className={styles.list}>
        {
          StoryMetas.map((story, i) => {
            return (
              <div key={story.id} className={styles.story} style={{ backgroundColor: Colors[i % Colors.length] }}>
                <div className={styles.container}>
                  <div className={styles.screenshot}>
                    <img src={story.screenshot} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>
                      <Link to={`${story.id}`}>
                        {story.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
