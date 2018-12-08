import React from 'react';
import { H1, H2, Transition } from 'firefly/component';
import { TransactionList, StrategyChart } from '../component';
import { Content, Header, StrategySummary, Screen } from '../container';

export const StrategyViewScreen = ({ strategy, go }) => (
  <Screen>
    <Header
      onBack={() => go('StrategyList')}
      title={strategy.name}/>
    <Transition>
      <Content>
        <StrategySummary strategy={strategy} />
        <StrategyChart strategy={strategy} />
      </Content>
      <Content>
        <H2>Операции</H2>
      </Content>
      <TransactionList strategy={strategy} />
    </Transition>
  </Screen>
);
