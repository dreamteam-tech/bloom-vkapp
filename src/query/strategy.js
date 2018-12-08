import gql from 'graphql-tag';

export const STRATEGY_LIST = gql`
  query strategies {
    strategies {
      id
      name
      description
      percent
      has_investments
    }
  }
`;
