import React from 'react';
import { Transition } from 'firefly/component';
import { pure, compose, withProps, withState } from 'recompose';
import { Dashboard, TransactionList } from '../component';
import { Menu, HeaderButton, Header, Screen } from '../container';
import { MenuItem } from '../container/MenuItem';

const menu = [
  { icon: 'Activity', name: 'Рабочий стол', to: 'Dashboard' },
  { icon: 'Layers', name: 'Стратегии', to: 'StrategyList' },
  { icon: 'Percent', name: 'Операции', to: 'TransactionList' },
  { icon: 'Settings', name: 'Настройки', to: 'Settings' },
];

export const Container = ({ go, onClose, setOpen, isOpen }) => (
  <Screen>
    <Menu isOpen={isOpen} onClose={onClose}>
      {menu.map((item, i) => (
        <MenuItem key={i} onClick={() => {
          setOpen(false);
          go(item.to);
        }} icon={item.icon} text={item.name} />
      ))}
    </Menu>
    <Header
      left={<HeaderButton icon='Menu' onClick={() => setOpen(true)} />}
      title='Рабочий стол'/>
    <Transition>
      <Dashboard onClick={strategy => go('Pay', { strategy })} />
    </Transition>
  </Screen>
);

export const DashboardScreen = compose(
  withState('isOpen', 'setOpen', false),
  withProps(props => ({
    ...props,
    onClose: () => {
      props.setOpen(false);
    }
  })),
  pure,
)(Container);
