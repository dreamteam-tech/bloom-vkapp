import React from 'react';
import { ListRow } from './ListRow';

export const Transaction = ({ onClick, transaction }) => (
  <ListRow onClick={onClick}>
    {transaction.amount}
  </ListRow>
);
