import React from 'react';
import { Popover } from 'firefly/component';
import { HeaderTitle } from './HeaderTitle';
import { HeaderButton } from './HeaderButton';

export const Header = ({ title, onBack }) => (
  <div className="b-header">
    {onBack ? (
      <HeaderButton icon='ArrowLeft' onClick={onBack} />
    ) : (
      <HeaderButton />
    )}
    <HeaderTitle>
      {title}
    </HeaderTitle>
    <Popover>
      <HeaderButton icon='MoreVertical' />
      <div className='b-header__menu'>
        Hello
      </div>
    </Popover>
  </div>
);
