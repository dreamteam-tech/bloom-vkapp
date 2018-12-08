import React from 'react';
import { compose, pure, withProps } from 'recompose';
import { graphql } from 'react-apollo';
import { withGenericState } from '../hoc';
import { STRATEGY_LIST } from '../query';
import { StrategyList as Container } from '../container';

export const StrategyList = compose(
  graphql(STRATEGY_LIST),
  withGenericState,
  withProps(props => {
    console.log(props);
    return ({
      ...props,
      strategies: props.data.strategies
    });
  }),
  pure
)(Container);
