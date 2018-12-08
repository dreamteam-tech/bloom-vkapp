import React from 'react';
import { Button, Transition } from 'firefly/component';
import { StrategyChart } from '../component';
import { Content, Header, StrategySummary, Screen, HeaderButton } from '../container';

export const StrategyJoinScreen = ({ strategy, go }) => (
  <Screen>
    <Header
      left={<HeaderButton icon='ArrowLeft' onClick={() => go('StrategyList')} />}
      title={strategy.name}/>
    <Transition>
      <Content>
        <StrategySummary strategy={strategy} />
        <Button modifiers={['block', 'big']}>Инвестировать</Button>
        <StrategyChart strategy={strategy} />
      </Content>
    </Transition>
  </Screen>
);
