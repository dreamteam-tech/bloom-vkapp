import { Transition } from 'firefly/component/Transition';
import React from 'react';
import { Transaction } from './Transaction';
import { List } from './List';

export const TransactionList = ({ transactions, onClick }) => (
  <List>
    {transactions.map((transaction, i) => (
      <Transition
        delay={(i + 1) / 10}
        key={i}>
        <Transaction
          onClick={() => onClick(transaction)}
          transaction={transaction}/>
      </Transition>
    ))}
  </List>
);
