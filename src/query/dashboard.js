import gql from 'graphql-tag';

export const DASHBOARD = gql`
  query dashboard {
    dashboard {
      strategy {
        id
        name
        description
      }
      invested
      amount
      chart {
        date
        value
      }
    }
  }
`;
