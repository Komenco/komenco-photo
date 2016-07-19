/**
 * Komenco Photo React Naitve Application
 * Author: André Neves
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';
import styles from './styles';

import CaptureButton from '../../components/CaptureButton';
import OverlayTouchable from '../../components/OverlayTouchable';

export default class CameraContainer extends Component {
  constructor() {
    super();
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.disk,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.off,
        torchMode: Camera.constants.TorchMode.off,
        keepAwake: true,
        mirrorImage: false
      }
    }

    this._takePicture = this._takePicture.bind(this);
    this._toggleTorchMode = this._toggleTorchMode.bind(this);
    this._toggleCameraType = this._toggleCameraType.bind(this);
  }

  componentWillMount() {
    Camera.checkDeviceAuthorizationStatus;
  }

  _takePicture() {
    this.refs.camera.capture()
      .then(data => {
        console.log(data.path);
        Actions.preview(data.path);
      })
      .catch(err => console.error(err));
  }

  _toggleCameraType() {
    let newType;
    let mirrorImage;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
      mirrorImage = true;
    } else if (this.state.camera.type === front) {
      newType = back;
      mirrorImage = false;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
        mirrorImage: mirrorImage
      }
    });
  }

  _toggleTorchMode() {
    let newTorchMode;
    const { on, off } = Camera.constants.TorchMode;

    if (this.state.camera.torchMode === on) {
      newTorchMode = off;
    } else if (this.state.camera.torchMode === off) {
      newTorchMode = on;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        torchMode: newTorchMode,
      }
    });
  }

  _handleFocusChange() { }

  render() {
    const camera = this.state.camera;

    return (
      <View style={styles.cameraView}>
        <Camera
          ref='camera'
          captureTarget={camera.captureTarget}
          aspect={camera.aspect}
          style={styles.camera}
          flashMode={camera.flashMode}
          torchMode={camera.torchMode}
          defaultOnFocusComponent
          onFocusChanged={this._handleFocusChange}
          type={camera.type}
          keepAwake={camera.keepAwake}
          mirrorImage={camera.mirrorImage}
        />

        <View style={styles.topOverlay}>
          <OverlayTouchable
            onPress={this._toggleTorchMode}
            imageSource={require('../../../assets/flash-off.png')}
          />
          <OverlayTouchable
            onPress={this._toggleTorchMode}
            imageSource={require('../../../assets/flash-on.png')}
          />
          <OverlayTouchable
            onPress={this._toggleTorchMode}
            imageSource={require('../../../assets/switch.png')}
          />
        </View>
        <View style={styles.bottomOverlay}>
          <OverlayTouchable
            onPress={this._toggleCameraType}
            imageSource={require('../../../assets/switch.png')}
          />
          <OverlayTouchable
            onPress={this._toggleTorchMode}
            imageSource={require('../../../assets/flash-on.png')}
          />
        </View>
        <CaptureButton takePicture={this._takePicture}/>
      </View>
    );
  }
}
