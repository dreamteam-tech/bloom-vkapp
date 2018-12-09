import React from 'react';
import { H1, H2, Transition } from 'firefly/component';
import { TransactionList, StrategyPieChart, StrategyChart, HeaderMenuButton } from '../component';
import { Content, Header, StrategySummary, Screen } from '../container';

export const StrategyViewScreen = ({ strategy, go }) => (
  <Screen>
    <Header
      left={<HeaderMenuButton go={go}/>}
      title={strategy.name}/>
    <Transition>
      <Content>
        <StrategySummary strategy={strategy} />
        <StrategyPieChart strategy={strategy} />
        <H2>Доходность</H2>
        <StrategyChart strategy={strategy} />
      </Content>
      <Content>
        <H2>Операции</H2>
      </Content>
      <TransactionList strategy={strategy} />
    </Transition>
  </Screen>
);
