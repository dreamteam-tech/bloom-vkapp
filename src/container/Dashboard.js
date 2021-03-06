import React from 'react';
import BigNumber from 'bignumber.js';
import { Divider, H2, bem, Button, H1, Icon, Transition } from 'firefly/component';
import { TransactionList } from '../component/TransactionList';
import { formatMoney } from '../utils';
import { Content } from './Content';
import { HeaderButton } from './HeaderButton';
import { StrategyChart } from './StrategyChart';

const bigNumberify = value => new BigNumber(value);

const calc = row => {
  const amount = bigNumberify(row.amount);
  const invested = bigNumberify(row.invested);
  if (amount.isEqualTo(invested)) {
    return 0;
  }

  return amount
    .minus(row.invested)
    .div(row.amount)
    .multipliedBy(100)
    .toNumber()
    .toFixed(2);
};

const DashboardRow = ({ row, onPay, onWithdraw }) => (
  <div>
    <div className="b-dashboard__hero">
      <div className="b-dashboard__item">
        <div className="b-dashboard__caption">Текущий баланс:</div>
        <div className="b-dashboard__value">
          {formatMoney(row.amount)}
        </div>
      </div>
    </div>
    <div className='b-dashboard__grid'>
      <div className="b-dashboard__item">
        <div className="b-dashboard__caption">Процент:</div>
        <div className={bem("b-dashboard__value", {
          'green': row.amount > row.invested,
          'red': row.amount < row.invested
        })}>
          {row.amount > row.invested && (
            <Icon className='b-dashboard__icon' icon='ArrowUp'/>
          )}
          {row.amount < row.invested && (
            <Icon className='b-dashboard__icon' icon='ArrowDown'/>
          )}
          {calc(row)}%
        </div>
      </div>
      <div className="b-dashboard__item">
        <div className="b-dashboard__caption">Инвестировано:</div>
        <div className="b-dashboard__value">
          {formatMoney(row.invested)}
        </div>
      </div>
    </div>
    <div className="b-dashboard__group">
      <Button
        modifiers='rounded'
        onClick={() => onPay(row.strategy)}>
        Инвестировать
      </Button>
      <Button
        modifiers='rounded'
        onClick={() => onWithdraw(row.strategy)}>
        Вывод средств
      </Button>
    </div>
    <StrategyChart data={row.chart}/>
  </div>
);

export const Dashboard = ({ row, rows, onPay, onWithdraw, onNext, onPrev }) => row && (
  <Transition>
    <div className="b-dashboard__header">
      <HeaderButton onClick={onPrev} icon={rows.length > 1 ? 'ArrowLeft' : ''}/>
      <H1 className='b-dashboard__title'>{row.strategy.name}</H1>
      <HeaderButton onClick={onNext} icon={rows.length > 1 ? 'ArrowRight' : ''}/>
    </div>
    <DashboardRow onPay={onPay} onWithdraw={onWithdraw} row={row}/>
    <Divider />
    <Content>
      <H2>Операции</H2>
    </Content>
    <TransactionList filter={{ strategy_id: row.strategy.id }}/>
  </Transition>
);
