/**
** Komenco Photo
**/

import React from 'react';
import { Router } from 'react-native-router-flux';
import scenes from './scenes/scenes';
import getSceneStyle from './themes/Scenes';

const App = () => (
  <Router
    scenes={scenes}
    getSceneStyle={getSceneStyle}
  />
);

export default App;
