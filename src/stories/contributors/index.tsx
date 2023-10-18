import React, { useRef, useState, useEffect } from 'react';
import { Space, Button, Tag, Modal, Input, InputRef } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Data } from './data';
import styles from './index.module.less';

const { G6V5: G6 } = window as any;
const { Graph } = G6;

const DefaultRepos = [
  'antvis/g2',
  'antvis/g6',
  'antvis/l7',
];

export const Contributors: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [repos, setRepos] = useState<string[]>(DefaultRepos);

  // Repo input
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);

    useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedRepo: string) => () => {
    const newRepos = repos.filter((repo) => repo !== removedRepo);
    setRepos(newRepos);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !repos.includes(inputValue)) {
      setRepos([...repos, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  // G6 Graph
  const graph = useRef<any>(null);
  useEffect(() => {
    if (graph.current) {
      return;
    }

    const rect = document.querySelector('#g6-container')?.getBoundingClientRect();

    graph.current = new Graph({
      container: 'g6-container',
      width: rect?.width || 1,
      height: rect?.height || 1,
      transforms: ['transform-v4-data'],
      layout: {
        type: 'force',
        preventOverlap: true,
        animated: true,
        linkDistance: (d: any) => {
          if (d.source === 'node0' || d.target === 'node0') {
            return 200;
          }
          return 80;
        },
      },
      modes: {
        default: ['zoom-canvas', 'drag-canvas', 'drag-node', 'click-select'],
      },
      data: Data,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.repo}>
            <Space size={[0, 'small']} wrap>
              {
                repos.map((repo) => (
                  <Tag key={repo} bordered={false} closable onClose={handleClose(repo)}>{repo}</Tag>
                ))
              }
              {
              inputVisible ? (
                <Input
                  ref={inputRef}
                  type="text"
                  size="small"
                  style={{ width: 200 }}
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputConfirm}
                  onPressEnter={handleInputConfirm}
                />
              ) : (
                <Tag
                  style={{ borderStyle: 'dashed' }}
                  onClick={showInput}
                  icon={<PlusOutlined />}
                >
                  Add a GitHub Repo into Graph
                </Tag>
              )}
            </Space>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.accessKey}>
            <Button type="dashed" onClick={() => setModalOpen(true)}>Edit Access Token</Button>
          </div>
        </div>
      </div>
      <div className={styles.graph} id="g6-container">
        <div className={styles.power}>
          数据来源: GitHub API, Visualizated by <a href="http://github.com/antvis/G6" target="_blank">G6</a>.
        </div>
      </div>

      <Modal
        title="Edit Access Token"
        style={{ top: 36 }}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>This tool use GitHub API to retrieve repository metadata. You may see this page because you have hit the <a href="https://docs.github.com/en/rest/overview/resources-in-the-rest-api" target="_blank">GitHub API rate limit</a> .</p>
        <p>Star-history will need your <a href="https://github.com/settings/tokens" target="_blank">personal access token</a> to unlimit it. If you don't already have one, create one , and paste it into the textbox below (no scope to your personal data is needed)</p>
        <p style={{ fontWeight: 'bold' }}>Access Token (will be stored in your local storage)</p>
        <Input placeholder="Your GitHub Access Token..." />
      </Modal>
    </div>
  );
}