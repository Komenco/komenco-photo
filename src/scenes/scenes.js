import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import CameraContainer from '../containers/CameraContainer/CameraContainer';
import PreviewContainer from '../containers/PreviewContainer/PreviewContainer';

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
    <Scene
      key='preview'
      type='replace'
      hideNavBar={true}
      component={PreviewContainer}
      title='Preview'
    />
  </Scene>
);

export default scenes;
