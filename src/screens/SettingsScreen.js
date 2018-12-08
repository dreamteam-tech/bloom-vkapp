import React from 'react';
import { HeaderButton, Header, Screen } from '../container';

export const SettingsScreen = ({ go, onClose, setOpen, isOpen }) => (
  <Screen>
    <Header
      left={<HeaderButton icon='ArrowLeft' onClick={() => go('Dashboard')}/>}
      title='Настройки'/>
    <div className='b-settings'>Раздел в разработке</div>
  </Screen>
);
