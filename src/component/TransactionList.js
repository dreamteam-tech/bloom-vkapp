import { compose, pure, withProps } from 'recompose';
import { graphql } from 'react-apollo';
import { withGenericState } from '../hoc';
import { TRANSACTION_LIST } from '../query';
import { TransactionList as Container } from '../container';

export const TransactionList = compose(
  graphql(TRANSACTION_LIST, {
    options: props => ({
      variables: { strategy_id: props.strategy.id }
    })
  }),
  withGenericState,
  withProps(props => ({
    ...props,
    transactions: props.data.transactions
  })),
  pure
)(Container);
