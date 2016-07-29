'use strict';

import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Images from '../../themes/index';
import Styles from './Styles';

export default class CaptureButton extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.wrapper}
          onPress={this.props.takePicture}>
          <Image
            source={require('../../../assets/camera.png')}
            style={Styles.button}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
