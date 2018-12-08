import React from 'react';
import { Icon } from 'firefly/component';

export const MenuItem = ({ onClick, icon, text }) => (
  <div className='b-menu-item' onClick={onClick}>
    <Icon icon={icon} className='b-menu-item__icon' />
    <div className="b-menu-item__text">{text}</div>
  </div>
);
