import { Spinner } from '@vkontakte/vkui';
import connect from '@vkontakte/vkui-connect';
import React from 'react';
import { branch, compose, lifecycle, pure, renderComponent, withState } from 'recompose';

export const Preload = compose(
  withState('user', 'setUser', null),
  lifecycle({
    componentDidMount() {
      connect.subscribe((e) => {
        switch (e.detail.type) {
          case 'VKWebAppGetUserInfoResult':
            this.props.setUser(e.detail.data);
            break;

          default:
            console.log(e.detail.type);
        }
      });
    }
  }),
  branch(props => null === props.user, renderComponent(Spinner)),
  pure
)(({ children }) => children);
