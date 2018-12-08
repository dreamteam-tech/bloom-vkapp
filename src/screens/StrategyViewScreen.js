import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { Back } from '../container';

export const StrategyViewScreen = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader left={<Back go={go} to="home" />}>StrategyView</PanelHeader>
    StrategyView
  </Panel>
);
