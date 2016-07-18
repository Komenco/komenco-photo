/**
 * Komenco Photo React Naitve Application
 * Author: André Neves
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import CameraView from './containers/CameraView/CameraView';
import PreviewView from './containers/PreviewView/PreviewView';

StatusBar.setBarStyle('light-content');

const scenes = Actions.create(
  <Scene key='app'>
    <Scene key='camera' type='replace' initial={true} hideNavBar={true} component={CameraView} title='Camera' />
    <Scene key='preview' type='replace' hideNavBar={true} component={PreviewView} title='Preview' />
  </Scene>
);

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: '#454545',
  shadowColor: 'black',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
});

const App = () => (
  <Router
    scenes={scenes}
    getSceneStyle={getSceneStyle}
  />
)

export default App;
