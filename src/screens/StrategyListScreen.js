import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { StrategyList } from '../component';
import { Back } from '../container';

export const StrategyListScreen = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader left={<Back go={go} to="home" />}>Стратегии</PanelHeader>
    <StrategyList />
  </Panel>
);
