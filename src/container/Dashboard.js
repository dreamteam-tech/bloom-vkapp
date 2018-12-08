import React from 'react';
import { bem, Button, H1, Icon } from 'firefly/component';
import { formatMoney } from '../utils';
import { HeaderButton } from './HeaderButton';
import { StrategyChart } from './StrategyChart';

const DashboardRow = ({ row, onClick }) => (
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
          123%
        </div>
      </div>
      <div className="b-dashboard__item">
        <div className="b-dashboard__caption">Инвестировано:</div>
        <div className="b-dashboard__value">
          {formatMoney(row.invested)}
        </div>
      </div>
    </div>
    <Button modifiers='rounded' onClick={() => onClick(row.strategy)}>Инвестировать</Button>
    <StrategyChart data={row.chart}/>
  </div>
);

export const Dashboard = ({ row, rows, onClick, onNext, onPrev }) => row && (
  <div>
    <div className="b-dashboard__header">
      <HeaderButton onPrev={onPrev} icon={rows.length > 1 ? 'ArrowLeft' : ''}/>
      <H1 className='b-dashboard__title'>{row.strategy.name}</H1>
      <HeaderButton onPrev={onNext} icon={rows.length > 1 ? 'ArrowRight' : ''}/>
    </div>
    <DashboardRow onClick={onClick} row={row}/>
  </div>
);
