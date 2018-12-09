import { compose, lifecycle, pure, withProps, withState } from 'recompose';
import { graphql } from 'react-apollo';
import { withGenericState } from '../hoc';
import { DASHBOARD } from '../query';
import { Dashboard as Container } from '../container';

export const Dashboard = compose(
  graphql(DASHBOARD),
  withGenericState,
  withState('row', 'setRow', null),
  lifecycle({
    componentDidMount() {
      const { setRow, data } = this.props;

      if (data.dashboard.length > 0) {
        setRow(data.dashboard[0]);
      }
    }
  }),
  withProps(props => ({
    ...props,
    rows: props.data.dashboard,
    onPrev: () => {
      const { setRow, row, data: { dashboard } } = props;
      const previousIndex = dashboard.findIndex(c => c.strategy.id === row.strategy.id) - 1;
      const index = previousIndex === -1 ? dashboard.length - 1 : previousIndex;
      setRow(dashboard[index]);
    },
    onNext: () => {
      const { setRow, row, data: { dashboard } } = props;
      const nextIndex = dashboard.findIndex(c => c.strategy.id === row.strategy.id) + 1;
      const index = nextIndex === dashboard.length ? 0 : nextIndex;
      setRow(dashboard[index]);
    }
  })),
  pure
)(Container);
