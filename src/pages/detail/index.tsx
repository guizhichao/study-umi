import React from 'react';
import { Spin } from 'antd';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.detail}>
      <h1 className={styles.title}>detail</h1>
      {/* <Spin spinning/> */}
    </div>
  );
};
