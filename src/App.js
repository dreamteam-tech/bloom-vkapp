import React, { createElement } from 'react';
import { Header, HeaderButton, Screen } from './container';
import {
  StrategyListScreen,
  DashboardScreen,
  DebugScreen,
  PayScreen,
  TransactionListScreen,
  SettingsScreen,
  StrategyJoinScreen,
  StrategyViewScreen
} from './screens';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'Dashboard',
      fetchedUser: null
    };
  }

  go = (activePanel, data = {}) => {
    console.log(activePanel, data);
    this.setState({ activePanel, data });
  };

  render() {
    const mapping = {
      "Pay": PayScreen,
      "Dashboard": DashboardScreen,
      "Settings": SettingsScreen,
      "Debug": DebugScreen,
      "TransactionList": TransactionListScreen,
      "StrategyList": StrategyListScreen,
      "StrategyView": StrategyViewScreen,
      "StrategyJoin": StrategyJoinScreen
    };

    const { activePanel, data } = this.state;

    if (activePanel in mapping) {
      return createElement(mapping[activePanel], {
        ...data,
        go: this.go
      });
    }

    return (
      <Screen>
        <Header
          left={<HeaderButton icon='ArrowLeft' onClick={() => this.go('Dashboard')} />}
          title='Раздел не найден'/>
      </Screen>
    );
  }
}

export default App;
