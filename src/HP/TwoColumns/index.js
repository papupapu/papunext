import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Ticket from '../../Atoms/Layout/Cards/Ticket';

import styles from './twocols.module.scss';

function TwoColumns({ contents }) {
  if (!contents || !contents.length) {
    return null;
  }
  return (
    <div className={`${styles.wrap} mb--m c-bg--p`}>
      <div className={styles.wrap__cols}>
        {contents.map((col, n) => {
          let colCls = styles.wrap__cols__col2;
          let imgRatio = '16:9';
          if (n === 0) {
            colCls = `${styles.wrap__cols__col1} c-bg--s`;
            imgRatio = null;
          }
          return (
            <div key={`col${n === 0 ? '1' : '2'}`} className={colCls}>
              <h2 className={`${styles['wrap__cols--tit']} tp-s--xs c-txt--f1`}>
                {col.title}
              </h2>
              {col.data.map((art, x) => (
                <Ticket
                  key={`col${n === 0 ? '1' : '2'}-${x + 1}`}
                  {...art}
                  imgRatio={imgRatio}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default memo(TwoColumns);
TwoColumns.propTypes = {
  contents: PropTypes.instanceOf(Array),
};
TwoColumns.defaultProps = {
  contents: [],
};
