import gql from 'graphql-tag';

export const TRANSACTION_LIST = gql`
  query transactions($strategy_id: ID) {
    transactions(strategy_id: $strategy_id) {
      id
      amount
      type
      strategy {
        name
      }
    }
  }
`;

export const TRANSACTION_CHART = gql`
  query transactionChart($strategy_id: ID!) {
    transactionChart(strategy_id: $strategy_id) {
      date
      value
    }
  }
`;
