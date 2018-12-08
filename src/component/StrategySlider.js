import { compose, lifecycle, pure, withProps, withState } from 'recompose';
import { graphql } from 'react-apollo';
import { withGenericState } from '../hoc';
import { STRATEGY_LIST } from '../query';
import { StrategySlider as Container } from '../container';

export const StrategySlider = compose(
  graphql(STRATEGY_LIST),
  withGenericState,
  withState('row', 'setRow', null),
  lifecycle({
    componentDidMount() {
      const { setRow, data } = this.props;

      if (data.strategies.length > 0) {
        setRow(data.strategies[0]);
      }
    }
  }),
  withProps(props => ({
    ...props,
    rows: props.data.strategies,
    onPrev: () => {
      const current = props.row;

      let index = props.data.strategies.findIndex(c => c.name === current.name) - 1;
      if (index < 0) {
        index = props.data.strategies.length;
      }
      props.setRow(props.data.strategies[index]);
    },
    onNext: () => {
      const current = props.row;

      let index = props.data.strategies.findIndex(c => c.name === current.name) + 1;
      if (index > props.data.strategies.length) {
        index = 0;
      }
      props.setRow(props.data.strategies[index]);
    }
  })),
  pure
)(Container);
