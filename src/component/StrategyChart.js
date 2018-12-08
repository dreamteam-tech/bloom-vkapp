import { StrategyChart as Container } from '../container';
import { compose, pure, withProps } from 'recompose';
import { graphql } from 'react-apollo';
import { withGenericState } from '../hoc';
import { TRANSACTION_CHART } from '../query';

export const StrategyChart = compose(
  graphql(TRANSACTION_CHART, {
    options: props => ({
      variables: { strategy_id: props.strategy.id }
    })
  }),
  withGenericState,
  withProps(props => ({
    ...props,
    data: props.data.transactionChart
  })),
  pure
)(Container);
