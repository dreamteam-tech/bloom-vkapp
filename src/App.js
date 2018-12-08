import React, { createElement } from 'react';
// import '@vkontakte/vkui/dist/vkui.css';
import { StrategyListScreen, StrategyViewScreen } from './screens';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'StrategyList',
      fetchedUser: null
    };
  }

  go = (activePanel, data = {}) => {
    console.log(activePanel, data);
    this.setState({ activePanel, data });
  };

  render() {
    const mapping = {
      "StrategyList": StrategyListScreen,
      "StrategyView": StrategyViewScreen
    };

    const { activePanel, data } = this.state;

    if (activePanel in mapping) {
      return createElement(mapping[activePanel], {
        ...data,
        go: this.go
      });
    }

    return null;
  }
}

export default App;
