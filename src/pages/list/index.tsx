import React from 'react';
import { history } from 'umi';
import styles from './index.less';

export default () => {
  const clickButton = () => {
    history.push('/detail');
  };
  return (
    <div className={styles.list}>
      <h1 onClick={clickButton} className={styles.title}>
        Page index122
      </h1>
    </div>
  );
};
