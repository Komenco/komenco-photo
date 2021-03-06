import React, { Component, PropTypes } from 'react';
import { View, AlertIOS } from 'react-native';

import Camera from 'react-native-camera';
import OverlayTouchableImage from '../OverlayTouchableImage/OverlayTouchableImage';
import CaptureButton from '../CaptureButton/CaptureButton';

import Styles from './Styles';
import Images from '../../themes/Images';

class CameraComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.disk,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.off,
        torchMode: Camera.constants.TorchMode.off,
        keepAwake: true,
        mirrorImage: false,
        captureAudio: false
      }
    }

    // Binding `this`
    this._takePicture = this._takePicture.bind(this);
    this._toggleFlashMode = this._toggleFlashMode.bind(this);
    this._toggleTorchMode = this._toggleTorchMode.bind(this);
    this._toggleCameraType = this._toggleCameraType.bind(this);
  }

  _takePicture() {
    this.refs.camera.capture()
      .then(data => {
        this.props.takePicture(data.path);
      })
      .catch((err) => {
        AlertIOS.alert(
         'Whoops!',
         `The application encountered an error: ${err}`
        );
      });
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

  render() {
    const camera = this.state.camera;

    return (
      <View style={Styles.mainContainer}>
        <Camera
          ref='camera'
          captureTarget={camera.captureTarget}
          aspect={camera.aspect}
          style={Styles.fullScreen}
          flashMode={camera.flashMode}
          torchMode={camera.torchMode}
          defaultOnFocusComponent
          onFocusChanged={this._handleFocusChanged}
          onZoomChanged={this._handleZoomChanged}
          type={camera.type}
          keepAwake={camera.keepAwake}
          mirrorImage={camera.mirrorImage}
        />

        <View style={Styles.topOverlay}>
          <OverlayTouchableImage
            onPress={this._toggleFlashMode}
            imageSource={Images.flashOn}
          />
          <OverlayTouchableImage
            onPress={this._toggleCameraType}
            imageSource={Images.switchCamera}
          />
        </View>

        <CaptureButton takePicture={this._takePicture}/>
      </View>
    )
  }
}

CameraComponent.propTypes = {
  takePicture: PropTypes.func.isRequired
};

export default CameraComponent;
