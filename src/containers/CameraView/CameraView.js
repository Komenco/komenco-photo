/**
 * Nico React Naitve Application
 * Author: André Neves (Big Human)
 */

import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import Camera from 'react-native-camera';
import CustomActionSheet from 'react-native-custom-action-sheet';
import styles from './Styles';

export default class CameraView extends Component {
  constructor() {
    super();
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.memory,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.off,
        torchMode: Camera.constants.TorchMode.off,
        keepAwake: true,
        mirrorImage: false
      },
      profileActionSheet: false
    }

    this._takePicture = this._takePicture.bind(this);
    this._toggleTorchMode = this._toggleTorchMode.bind(this);
    this._toggleCameraType = this._toggleCameraType.bind(this);
    this._hideProfileActionSheet = this._hideProfileActionSheet.bind(this);
    this._showProfileActionSheet = this._showProfileActionSheet.bind(this);
    this._handleFocusChange = this._handleFocusChange.bind(this);
  }

  componentWillMount() {
    Camera.checkDeviceAuthorizationStatus;
  }

  _takePicture() {
    this.refs.camera.capture()
      .then(data => {
        console.log(data);
        Actions.preview(data);
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

  _showProfileActionSheet() {
    this.setState({ profileActionSheet: true });
  }

  _hideProfileActionSheet() {
    this.setState({ profileActionSheet: false });
  }

  _handleFocusChange(event) {
    console.log(event.nativeEvent.touchPoint);
    // call capture() here
  }

  render() {
    const camera = this.state.camera;
    const { profileActionSheet } = this.state;

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

        <View style={styles.actionSheetOverlay}>
          <CustomActionSheet modalVisible={profileActionSheet} onCancel={this._hideProfileActionSheet}>
            <View>
            <View style={styles.actionSheetHeader}>
              <Text style={styles.actionSheetHeaderText}>
                Select your action
              </Text>
            </View>
              <TouchableOpacity style={styles.actionSheetButton} activeOpacity={0.8}>
                <Text style={styles.actionSheetButtonText}>
                  Go to Twitter Profile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionSheetButton}
                activeOpacity={0.8}
                onPress={() => Alert.alert(
                  'Are you sure?',
                  'This will log out of the current Twitter account in Nico.',
                  [
                    {text: 'Cancel', onPress: () => console.log('Cancel Logout Action')},
                    {text: 'OK', onPress: () => console.log('Logged Out of Twitter Account')},
                  ]
                )}>
                <Text style={styles.actionSheetRedButtonText}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </CustomActionSheet>
        </View>

        <View style={styles.topOverlay}>
          <TouchableOpacity onPress={this._showProfileActionSheet}>
            <Image
            source={require('../../../assets/profile-2.png')}
            style={styles.profileImage}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._toggleTorchMode}>
            <Image
            source={require('../../../assets/torch.png')}
            style={styles.profileImage}/>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomOverlay}>
          <TouchableOpacity onPress={this._toggleCameraType}>
            <Image
            source={require('../../../assets/switch.png')}
            style={styles.profileImage}/>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.captureButton}
            onPress={this._takePicture}>
            <Image source={require('../../../assets/camera.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
