import React from 'react';
import { HeaderTitle } from './HeaderTitle';
import { HeaderButton } from './HeaderButton';

/*
<Popover>
      <HeaderButton icon='MoreVertical' />
      <div className='b-header__menu'>
        Hello
      </div>
    </Popover>
 */

export const Header = ({ title, left, right }) => (
  <div className="b-header">
    {left ? left : <div />}
    <HeaderTitle>
      {title}
    </HeaderTitle>
    {right ? right : <div />}
  </div>
);
