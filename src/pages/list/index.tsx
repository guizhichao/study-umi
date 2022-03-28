/*
 * @Descripttion:
 * @Author: cross.Carol
 * @Date: 2021-12-29 19:04:10
 * @LastEditors: cross.Carol
 * @LastEditTime: 2022-02-24 16:31:46
 */
import React from 'react';
import { history } from 'umi';
import styles from './index.less';
import GGEditor, { Flow } from 'gg-editor';

export default () => {
  const clickButton = () => {
    history.push('/detail');
  };

  const data = {
    nodes: [
      {
        id: '0',
        label: 'Node',
        x: 50,
        y: 50,
      },
      {
        id: '1',
        label: 'Node',
        x: 50,
        y: 200,
      },
    ],
    edges: [
      {
        label: 'Label',
        source: '0',
        sourceAnchor: 1,
        target: '1',
        targetAnchor: 0,
      },
    ],
  };
  return (
    // <div className={styles.list}>
    //   <h1 onClick={clickButton} className={styles.title}>
    //     Page index122
    //   </h1>
    // </div>
    // <div className={styles.list}>
    <GGEditor>
      <Flow className={styles.list} data={data} />
    </GGEditor>
    // </div>
  );
};
