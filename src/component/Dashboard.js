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
      const current = props.row;

      let index = props.data.dashboard.findIndex(c => c.name === current.name) - 1;
      if (index < 0) {
        index = props.data.dashboard.length;
      }
      props.setRow(props.data.dashboard[index]);
    },
    onNext: () => {
      const current = props.row;

      let index = props.data.dashboard.findIndex(c => c.name === current.name) + 1;
      if (index > props.data.dashboard.length) {
        index = 0;
      }
      props.setRow(props.data.dashboard[index]);
    }
  })),
  pure
)(Container);
