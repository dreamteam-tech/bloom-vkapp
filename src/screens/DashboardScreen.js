import React from 'react';
import { Transition } from 'firefly/component';
import { Dashboard, HeaderMenuButton } from '../component';
import { Header, Screen } from '../container';

export const DashboardScreen = ({ go }) => (
  <Screen>
    <Header
      left={<HeaderMenuButton go={go}/>}
      title='Рабочий стол'/>
    <Transition>
      <Dashboard
        onPay={strategy => go('Pay', { strategy })}
        onWithdraw={() => null}/>
    </Transition>
  </Screen>
);
