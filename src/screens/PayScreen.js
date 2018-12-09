import React from 'react';
import { Transition, bem } from 'firefly/component';
import connect from '@vkontakte/vkui-connect';
import { HeaderButton, Header, Screen, Content } from '../container';
import config from '../config';
import coinpaymentsImg from '../img/coinpayments.svg';
import vkImg from '../img/vk.svg';
import visaImg from '../img/visa.svg';

const iconMapping = {
  visa: visaImg,
  coinpayments: coinpaymentsImg,
  vk: vkImg
};

const PayRow = ({ isActive, name, description, onClick, icon }) => (
  <div
    onClick={onClick}
    className={bem("b-pay-list__row", { active: isActive })}>
    <div className="b-pay-list__icon">
      {icon && (
        <img className={bem("b-pay-list__img", { active: isActive })} src={iconMapping[icon]} alt={name}/>
      )}
    </div>
    <div className="b-pay-list__content">
      <div className="b-pay-list__title">{name}</div>
      <div className="b-pay-list__description">{description}</div>
    </div>
  </div>
);

export const PayScreen = ({ go, strategy, onClose, setOpen, isOpen }) => (
  <Screen>
    <Header
      left={<HeaderButton icon='ArrowLeft' onClick={() => go('Dashboard')}/>}
      title='Оплата'/>
    <Content>
      <div className='b-pay-list'>
        <Transition>
          <PayRow
            isActive={true}
            onClick={() => {
              connect.send("VKWebAppOpenPayForm", config.vkCommunity)
            }}
            icon='vk'
            name='VK Pay'
            description='Платеж через ВКонтакте'/>
        </Transition>
        <Transition delay={0.1}>
          <PayRow
            isActive={false}
            onClick={() => go('PayVisa', { strategy })}
            icon='visa'
            name='Visa / MasterCard'
            description='Оплата банковской картой'/>
        </Transition>
        <Transition delay={0.3}>
          <PayRow
            isActive={false}
            onClick={() => go('PayCoinpayments', { strategy })}
            icon='coinpayments'
            name='Coinpayments'
            description='Оплата криптовалютой'/>
        </Transition>
      </div>
    </Content>
  </Screen>
);
