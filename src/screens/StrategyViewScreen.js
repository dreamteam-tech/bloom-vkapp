import React from 'react';
import { H2, Transition } from 'firefly/component';
import { StrategyPieChart, StrategyChart, HeaderMenuButton } from '../component';
import { Content, Header, StrategySummary, Screen } from '../container';

export const StrategyViewScreen = ({ strategy, go }) => (
  <Screen>
    <Header
      left={<HeaderMenuButton go={go}/>}
      title={strategy.name}/>
    <Transition>
      <Content>
        <StrategySummary strategy={strategy}/>
      </Content>
      <StrategyPieChart strategy={strategy}/>
      <Content>
        <H2>Доходность</H2>
      </Content>
      <StrategyChart strategy={strategy}/>
    </Transition>
  </Screen>
);
