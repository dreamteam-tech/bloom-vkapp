import React from 'react';
import { HeaderTitle } from './HeaderTitle';

export const Header = ({ title, left, right }) => (
  <div className="b-header">
    {left ? left : <div />}
    <HeaderTitle>
      {title}
    </HeaderTitle>
    {right ? right : <div />}
  </div>
);
