import React from 'react';
import { Menu as MenuContainer, MenuItem } from '../container';

const menu = [
  { icon: 'Activity', name: 'Рабочий стол', to: 'Dashboard' },
  { icon: 'Layers', name: 'Стратегии', to: 'StrategyList' },
  { icon: 'Percent', name: 'Операции', to: 'TransactionList' },
  { icon: 'Settings', name: 'Настройки', to: 'Settings' },
];

export const Menu = ({ isOpen, onClose, setOpen, go }) => (
  <MenuContainer isOpen={isOpen} onClose={onClose}>
    {menu.map((item, i) => (
      <MenuItem key={i} onClick={() => {
        setOpen(false);
        go(item.to);
      }} icon={item.icon} text={item.name} />
    ))}
  </MenuContainer>
);
