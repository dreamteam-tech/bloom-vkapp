import React from 'react';
import { Transition } from 'firefly/component';
import { HeaderMenuButton, TransactionList } from '../component';
import { Screen, Header } from '../container';

export const TransactionListScreen = ({ id, go }) => (
  <Screen>
    <Header
      left={<HeaderMenuButton go={go}/>}
      title='Операции'/>
    <Transition>
      <TransactionList
        onClick={transaction => go('TransactionView', { transaction })}/>
    </Transition>
  </Screen>
);
