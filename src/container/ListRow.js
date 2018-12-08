import React from 'react';
import cx from 'classnames';

export const ListRow = ({ className, children, onClick }) => (
  <div
    className={cx("b-list__row", className)}
    onClick={onClick}>
    {children}
  </div>
);
