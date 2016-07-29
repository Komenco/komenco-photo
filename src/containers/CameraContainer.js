'use strict';

// Core Components
import React, { Component } from 'react'
import { StatusBar } from 'react-native';

// Components
import Camera from 'react-native-camera';
import PhotoComponent from '../components/PhotoComponent/PhotoComponent';
import CameraComponent from '../components/CameraComponent/CameraComponent';

export default class CameraContainer extends Component {
  constructor() {
    super();
    this.state = {
      path: null
    }

    // Binding Methods
    this.returnToCamera = this.returnToCamera.bind(this);
    this.takePicture = this.takePicture.bind(this);
  }

  componentWillMount() {
    Camera.checkDeviceAuthorizationStatus; // Device Permission
    StatusBar.setHidden(true); // Hides StatusBar
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
          returnToCamera={this.returnToCamera}
          photo={this.state.path}
        />
      : <CameraComponent
          takePicture={this.takePicture}
        />
    )
  }
}
