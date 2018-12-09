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
      const { setRow, row, data: { strategies } } = props;
      const previousIndex = strategies.findIndex(c => c.id === row.id) - 1;
      const index = previousIndex === -1 ? strategies.length - 1 : previousIndex;
      setRow(strategies[index]);
    },
    onNext: () => {
      const { setRow, row, data: { strategies } } = props;
      const nextIndex = strategies.findIndex(c => c.id === row.id) + 1;
      const index = nextIndex === strategies.length ? 0 : nextIndex;
      setRow(strategies[index]);
    }
  })),
  pure
)(Container);
