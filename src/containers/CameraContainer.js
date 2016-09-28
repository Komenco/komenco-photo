import React, { Component } from 'react'
import { StatusBar } from 'react-native';

import PhotoComponent from '../components/PhotoComponent/PhotoComponent';
import CameraComponent from '../components/CameraComponent/CameraComponent';

import Camera from 'react-native-camera';

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
