import { branch, renderComponent } from 'recompose';
import { Spinner } from 'firefly/component';

// Define an HoC that displays the Loading component instead of the
// wrapped component when props.data.loading is true
export const withLoadingState = branch(
  props => props.data.loading,
  renderComponent(Spinner)
);
