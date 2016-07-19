/**
 * Komenco Photo React Naitve Application
 * Author: André Neves
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';
import { StatusBar } from 'react-native';
import scenes from './scenes/scenes';
import configureStore from './store/configureStore';

StatusBar.setBarStyle('light-content');
const store = configureStore();

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: '#454545',
  shadowColor: 'black',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
});

const App = () => (
  <Provider store={store}>
    <Router
      scenes={scenes}
      getSceneStyle={getSceneStyle}
    />
  </Provider>
);

export default App;
