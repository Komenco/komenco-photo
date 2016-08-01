'use strict';

import React, { Component, PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import Styles from './Styles';

class OverlayTouchableIcon extends Component {
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
}

OverlayTouchableIcon.propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.string.isRequired,
  color: PropTypes.sting
}


export default OverlayTouchableIcon;
