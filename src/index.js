/**
 * Komenco Photo React Native Application
 * Author: André Neves
 */

import React from 'react';
import { Router } from 'react-native-router-flux';
import { StatusBar } from 'react-native';
import scenes from './scenes/scenes';

StatusBar.setBarStyle('light-content');

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
);

export default App;
