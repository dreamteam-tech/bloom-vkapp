import { Transition } from 'firefly/component/Transition';
import React from 'react';
import { StrategyChart, StrategyList } from '../component';
import { Screen, Header } from '../container';

/*
onPayClick = e => {
  connect.send("VKWebAppOpenPayForm", {
    "app_id": 6776201,
    "action": "pay-to-service",
    "params": {
      "amount": 1,
      "description": "тестовый платеж",
      "group_id": 167121797
    }
  });
};
*/

export const StrategyListScreen = ({ id, go }) => (
  <Screen>
    <Header title='Стратегии'/>
    <Transition>
      <StrategyList onClick={strategy => go('StrategyView', { strategy })}/>
    </Transition>
  </Screen>
);
