import React from 'react';
import { List } from '@vkontakte/vkui';
import { Strategy } from './Strategy';

export const StrategyList = ({ strategies }) => (
  <List>
    {strategies.map((strategy, i) => <Strategy strategy={strategy} key={i}/>)}
  </List>
);
