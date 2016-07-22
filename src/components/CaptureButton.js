import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Platform, StyleSheet } from 'react-native';

export default class CaptureButton extends Component {
  render() {
    return (
      <View style={styles.captureButtonContainer}>
        <TouchableOpacity
          style={styles.captureButtonWrapper}
          onPress={this.props.takePicture}>
          <Image
            source={require('../../assets/camera.png')}
            style={styles.captureButton}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  captureButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  captureButtonWrapper: {
    bottom: (Platform.OS === 'ios') ? 20 : 40,
    height: 74,
    width: 74,
    borderColor: '#ffffff',
    borderWidth: 3,
    borderRadius: 74/2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  captureButton: {
    width: 50,
    height: 50
  }
});
