import React from 'react';
import { ListItem } from '@vkontakte/vkui';

export const Strategy = ({ strategy }) => (
  <ListItem>
    {strategy.name}
  </ListItem>
);
