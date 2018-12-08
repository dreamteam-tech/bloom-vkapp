import React from 'react';
import { Icon } from 'firefly/component';

export const HeaderButton = ({ icon, onClick }) => (
  <button onClick={onClick} className='b-header__button'>
    {icon && (
      <Icon icon={icon} />
    )}
  </button>
);
