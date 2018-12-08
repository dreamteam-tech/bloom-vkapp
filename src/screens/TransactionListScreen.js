import { Transition } from 'firefly/component/Transition';
import React from 'react';
import { TransactionList } from '../component';
import { Screen, Header, HeaderButton } from '../container';

export const TransactionListScreen = ({ id, go }) => (
  <Screen>
    <Header
      left={<HeaderButton icon='ArrowLeft' onClick={() => go('Dashboard')} />}
      title='Операции'/>
    <Transition>
      <TransactionList
        onClick={transaction => go('TransactionView', { transaction })}/>
    </Transition>
  </Screen>
);
