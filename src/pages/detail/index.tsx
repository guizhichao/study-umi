import React, { FC } from 'react';
import { Spin } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

// @connect

interface Iprops {
  /** 名称 */
  name?: string;
}

interface DetailProps extends Iprops {
  /** 标题 */
  title?: string;
}

const mapStateToProps = (ConnectProps: Record<'detail', any>) => {
  const { detail } = ConnectProps;
  return {
    name: detail?.name,
  };
};

const Deatil: FC<DetailProps> = props => {
  const { name, title } = props;
  return (
    <div className={styles.detail}>
      <h1 className={styles.title}>{name}</h1>
    </div>
  );
};
export default connect(mapStateToProps)(Deatil);
// export default () => {
//   return (
//     <div className={styles.detail}>
//       <h1 className={styles.title}>detail</h1>
//       {/* <Spin spinning/> */}
//     </div>
//   );
// };
