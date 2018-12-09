import React, { Fragment } from 'react';
import { compose, pure, withProps, withState } from 'recompose';
import { HeaderButton } from '../container';
import { Menu } from './Menu';

export const Container = ({ isOpen, onClose, go, setOpen }) => (
  <Fragment>
    <Menu isOpen={isOpen} onClose={onClose} go={go} setOpen={setOpen}/>
    <HeaderButton icon='Menu' onClick={() => setOpen(true)}/>
  </Fragment>
);

export const HeaderMenuButton = compose(
  withState('isOpen', 'setOpen', false),
  withProps(props => ({
    ...props,
    onClose: () => {
      props.setOpen(false);
    }
  })),
  pure
)(Container);
