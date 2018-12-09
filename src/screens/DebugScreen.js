import React from 'react';
import { StrategySlider } from '../component';
import { HeaderButton, Header, Screen } from '../container';

export const DebugScreen = ({ go, onClose, setOpen, isOpen }) => (
  <Screen>
    <Header
      left={<HeaderButton icon='ArrowLeft' onClick={() => go('Dashboard')}/>}
      title='Отладка'/>
    <StrategySlider onClick={strategy => go('StrategyView', { strategy })} />
  </Screen>
);
