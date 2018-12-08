import React from 'react';
import moment from 'moment';
import { bem, Icon } from 'firefly/component';
import { formatMoney } from '../utils';
import { ListRow } from './ListRow';

export const Transaction = ({ onClick, transaction }) => (
  <ListRow className='b-transaction-row' onClick={onClick}>
    <div>
      <div className="b-transaction-row__type">{transaction.type === 0 ? 'Платеж' : 'Зачисление / Списание'}</div>
      <div className="b-transaction-row__strategy">{transaction.strategy.name}</div>
    </div>
    <div>
      <div className={bem("b-transaction-row__amount", {
        'green': transaction.amount > 0,
        'red': transaction.amount < 0
      })}>
        {transaction.amount > 0 && (
          <Icon className='b-dashboard__icon' icon='ArrowUp'/>
        )}
        {transaction.amount < 0 && (
          <Icon className='b-dashboard__icon' icon='ArrowDown'/>
        )}
        {formatMoney(transaction.amount)}
      </div>
      <div className="b-transaction-row__date">
        {moment(transaction.created_at).utc().format('lll')}
      </div>
    </div>
  </ListRow>
);
