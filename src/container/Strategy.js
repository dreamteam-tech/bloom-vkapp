import React from 'react';
import { ListRow } from './ListRow';

export const Strategy = ({ onClick, strategy }) => (
  <ListRow onClick={onClick}>
    {strategy.name}
  </ListRow>
);
