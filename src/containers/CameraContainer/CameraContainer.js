/**
 * Komenco Photo React Naitve Application
 * Author: André Neves
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Share from 'react-native-cross-share';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';
import styles from './styles';

import CaptureButton from '../../components/CaptureButton';
import OverlayTouchable from '../../components/OverlayTouchable';

export default class CameraContainer extends Component {
  constructor() {
    super();
    this.state = {
      path: null,
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
    this._toggleFlashMode = this._toggleFlashMode.bind(this);
    this._toggleTorchMode = this._toggleTorchMode.bind(this);
    this._toggleCameraType = this._toggleCameraType.bind(this);
    this._onShare = this._onShare.bind(this);
    this._returnToCamera = this._returnToCamera.bind(this);
  }

  componentWillMount() {
    // Ask for device authorization to use the Camera
    Camera.checkDeviceAuthorizationStatus;

    // Hides StatusBar
    StatusBar.setHidden(true);
  }

  _returnToCamera() {
    this.setState({ path: null });
  }

  _onShare() {
    Share.open({
      share_text: "Check this picture out!",
      share_URL: this.state.path,
      title: "Share Photo"
    },(e) => {
      console.log(e);
    });
  }

  _takePicture() {
    this.refs.camera.capture()
      .then(data => {
        this.setState({ path: data.path });
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
    const { on, off } = Camera.constants.TorchMode;
    const { torchMode } = this.state.camera;
    let newTorchMode;

    if (torchMode === on) {
      newTorchMode = off;
    } else if (torchMode === off) {
      newTorchMode = on;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        torchMode: newTorchMode
      }
    });
  }

  _toggleFlashMode() {
    const { on, off } = Camera.constants.FlashMode;
    const { flashMode } = this.state.camera;
    let newFlashMode;

    if (flashMode === on) {
      newFlashMode = off;
    } else if (flashMode === off) {
      newFlashMode = on;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode
      }
    });
  }

  _handleFocusChanged() { /* noop */ }

  _handleZoomChanged() { /* noop */ }

  renderCamera() {
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
          onFocusChanged={this._handleFocusChanged}
          onZoomChanged={this._handleZoomChanged}
          type={camera.type}
          keepAwake={camera.keepAwake}
          mirrorImage={camera.mirrorImage}
        />

        <View style={styles.topOverlay}>
          <OverlayTouchable
            onPress={this._toggleTorchMode}
            imageSource={require('../../../assets/flash-on.png')}
          />
          <OverlayTouchable
            onPress={this._toggleCameraType}
            imageSource={require('../../../assets/switch.png')}
          />
          <OverlayTouchable
            onPress={this._toggleFlashMode}
            imageSource={require('../../../assets/flash-off.png')}
          />
        </View>

        <CaptureButton takePicture={this._takePicture}/>
      </View>
    );
  }

  renderImage() {
    return (
      <View style={styles.previewView}>
        <Image
          source={{
            isStatic: true,
            uri: this.state.path,
          }}
          style={styles.image}
        />
        <View style={styles.topOverlay}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={this._returnToCamera}>
            <Icon
              name='chevron-left'
              size={50}
              color='rgba(255,255,255,1)'
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={this._onShare}>
            <Icon
              name='external-link'
              size={50}
              color='rgba(255,255,255,1)'
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.cameraView}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}
