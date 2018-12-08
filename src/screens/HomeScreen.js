import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vkui-connect';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, View } from '@vkontakte/vkui';

export class HomeScreen extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
      photo_200: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      city: PropTypes.shape({
        title: PropTypes.string
      })
    })
  };

  onPayClick = e => {
    connect.send("VKWebAppOpenPayForm", {
      "app_id": 6776201,
      "action": "pay-to-service",
      "params": {
        "amount": 1,
        "description": "тестовый платеж",
        "group_id": 167121797
      }
    });
  };

  render() {
    const {
      fetchedUser
    } = this.props;

    return (
      <Panel id={this.props.id}>
        <PanelHeader>Example</PanelHeader>

        {fetchedUser ? (
          <Group title="User Data Fetched with VK Connect">
            <ListItem>
              {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
            </ListItem>
          </Group>
        ) : (
          <Group title="User Data Fetched with VK Connect">
            <ListItem>
              Loading...
            </ListItem>
          </Group>
        )}

        <Group title="Navigation Example">
          <Div>
            <Button size="xl" level="2" onClick={this.onPayClick} data-to="persik">
              Pay
            </Button>
            <Button size="xl" level="2" onClick={this.props.go} data-to="persik">
              Show me the Persik, please
            </Button>
            <Button size="xl" level="2" onClick={this.props.go} data-to="StrategyList">
              StrategyList
            </Button>
            <Button size="xl" level="2" onClick={this.props.go} data-to="StrategyView">
              StrategyView
            </Button>
          </Div>
        </Group>
      </Panel>
    );
  }
}
