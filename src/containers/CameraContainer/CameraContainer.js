'use strict';

// Core Components
import React, { Component } from 'react'
import { StatusBar } from 'react-native';

// Components
import Camera from 'react-native-camera';

// Styles
import styles from './styles';

export default class CameraContainer extends Component {
  constructor() {
    super();
    this.state = {
      path: null
    }

    this.returnToCamera = this.returnToCamera.bind(this);
    this.takePicture = this.takePicture.bind(this);
  }

  componentWillMount() {
    // Ask for device authorization to use the Camera
    Camera.checkDeviceAuthorizationStatus;

    // Hides StatusBar
    StatusBar.setHidden(true);
  }

  returnToCamera() {
    this.setState({ path: null });
  }

  takePicture(path) {
    this.setState({ path: path });
  }

  render() {
    return (
      (this.state.path)
      ? <PhotoComponent
          returnToCamera={this._returnToCamera}
          photo={this.state.path}
        />
      : <CameraComponent
          takePicture={this._takePicture}
        />
    )
  }
}
