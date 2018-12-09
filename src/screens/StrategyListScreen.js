import { Transition } from 'firefly/component/Transition';
import React from 'react';
import { HeaderMenuButton, StrategySlider } from '../component';
import { Screen, Header } from '../container';

export const StrategyListScreen = ({ id, go }) => (
  <Screen>
    <Header
      left={<HeaderMenuButton go={go}/>}
      title='Стратегии'/>
    <Transition>
      <StrategySlider onClick={strategy => go('StrategyView', { strategy })} />
    </Transition>
  </Screen>
);
