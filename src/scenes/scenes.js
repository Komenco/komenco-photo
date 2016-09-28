import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import CameraContainer from '../containers/CameraContainer';

const scenes = Actions.create(
  <Scene key='app'>
    <Scene
      key='camera'
      type='replace'
      initial
      hideNavBar
      component={CameraContainer}
      title='Camera'
    />
  </Scene>
);

export default scenes;
