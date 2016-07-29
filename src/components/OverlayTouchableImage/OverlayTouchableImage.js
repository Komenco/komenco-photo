'use strict';

import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import Styles from './Styles';

export default class OverlayTouchableImage extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
        source={this.props.imageSource}
        style={Styles.overlay}/>
      </TouchableOpacity>
    );
  }
};
