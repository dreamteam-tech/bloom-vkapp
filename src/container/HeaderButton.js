import React from 'react';
import cx from 'classnames';
import { Icon } from 'firefly/component';

export const HeaderButton = ({ className, icon, onClick }) => (
  <button
    onClick={onClick}
    className={cx('b-header__button', className)}>
    {icon && <Icon icon={icon}/>}
  </button>
);
