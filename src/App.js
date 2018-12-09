import React, { createElement } from 'react';
import { graphql } from 'react-apollo';
import connect from '@vkontakte/vkui-connect';
import { Spinner } from 'firefly/component';
import { compose, pure } from 'recompose';
import { REGISTRATION_VKONTAKTE_MUTATION } from './query';
import { Header, HeaderButton, Screen } from './container';
import * as screens from './screens';
import { persistUser } from './utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      activePanel: 'Dashboard',
      fetchedUser: null
    };
  }

  componentDidMount() {
    const {
      mutate
    } = this.props;

    connect.send("VKWebAppResizeWindow", { "width": 800, "height": 1000 });

    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          mutate({
            variables: {
              first_name: e.detail.data.first_name,
              last_name: e.detail.data.last_name,
              vk_id: e.detail.data.id
            }
          }).then(response => {
            persistUser(response.data.registrationVkontakte);
            this.setState({
              loading: false
            });
          });
          break;

        default:
          console.log(e.detail.type);
          break;
      }
    });
    connect.send('VKWebAppGetUserInfo', {});
  }

  go = (activePanel, data = {}) => {
    console.log(activePanel, data);
    this.setState({ activePanel, data });
  };

  renderScreen(activePanel, data) {
    const mapping = {
      "Pay": screens.PayScreen,
      "Dashboard": screens.DashboardScreen,
      "Settings": screens.SettingsScreen,
      "TransactionList": screens.TransactionListScreen,
      "StrategyList": screens.StrategyListScreen,
      "StrategyView": screens.StrategyViewScreen
    };

    if (activePanel in mapping) {
      return createElement(mapping[activePanel], { ...data, go: this.go });
    }

    return (
      <Screen>
        <Header
          left={<HeaderButton icon='ArrowLeft' onClick={() => this.go('Dashboard')}/>}
          title='Раздел не найден'/>
      </Screen>
    );
  }

  render() {
    const { loading, activePanel, data } = this.state;

    if (loading) {
      return (
        <Screen>
          <Spinner/>
        </Screen>
      )
    }

    return this.renderScreen(activePanel, data);
  }
}

export default compose(
  graphql(REGISTRATION_VKONTAKTE_MUTATION),
  pure
)(App);
