import React from 'react';

export const ListRow = ({ children, onClick }) => (
  <div className="b-list__row" onClick={onClick}>
    {children}
  </div>
);
