import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { Button, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import {
  HomeScreen,
  PersikScreen,
  StrategyListScreen,
  StrategyViewScreen
} from './screens';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'home',
      fetchedUser: null
    };
  }

  go = (e) => {
    this.setState({
      activePanel: e.currentTarget.dataset.to
    })
  };

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <HomeScreen id="home" go={this.go}/>
        <StrategyListScreen id="StrategyList" go={this.go} />
        <StrategyViewScreen id="StrategyView" go={this.go} />
        <PersikScreen id="persik" go={this.go}/>
      </View>
    );
  }
}

export default App;
