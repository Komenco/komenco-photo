'use strict';

import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import Styles from './Styles';

export default class OverlayTouchableIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        style={Styles.overlay}
        onPress={this.props.onPress}>
        <Icon
          name={this.props.iconName}
          size={this.props.iconSize}
          color={this.props.color}
        />
      </TouchableOpacity>
    );
  }
};
