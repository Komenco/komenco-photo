import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import CameraContainer from '../containers/CameraContainer/CameraContainer';

const scenes = Actions.create(
  <Scene key='app'>
    <Scene
      key='camera'
      type='replace'
      initial={true}
      hideNavBar={true}
      component={CameraContainer}
      title='Camera'
    />
  </Scene>
);

export default scenes;
