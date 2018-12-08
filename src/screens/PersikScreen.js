import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, platform } from '@vkontakte/vkui';
import { Back } from '../container';
import persik from '../img/persik.png';
import './Persik.css';

const osname = platform();

export const PersikScreen = props => (
  <Panel id={props.id}>
    <PanelHeader left={<Back go={props.go} to="home"/>}>Persik</PanelHeader>
    <img className="Persik" src={persik} alt="Persik The Cat"/>
  </Panel>
);

PersikScreen.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};
