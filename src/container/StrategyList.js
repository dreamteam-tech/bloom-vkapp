import React from 'react';
import { Strategy } from './Strategy';
import { List } from './List';

export const StrategyList = ({ strategies, onClick }) => (
  <List>
    {strategies.map((strategy, i) => (
      <Strategy
        onClick={() => onClick(strategy)}
        strategy={strategy}
        key={i}/>
    ))}
  </List>
);
