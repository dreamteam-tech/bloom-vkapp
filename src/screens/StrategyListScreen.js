import { Transition } from 'firefly/component/Transition';
import React from 'react';
import { StrategySlider } from '../component';
import { Screen, Header, HeaderButton } from '../container';

export const StrategyListScreen = ({ id, go }) => (
  <Screen>
    <Header
      left={<HeaderButton icon='ArrowLeft' onClick={() => go('Dashboard')} />}
      title='Стратегии'/>
    <Transition>
      <StrategySlider onClick={strategy => go('StrategyView', { strategy })} />
    </Transition>
  </Screen>
);
