import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class OverlayTouchableIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.overlayTouchableIcon}
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

const styles = StyleSheet.create({
  overlayTouchableIcon: {
    backgroundColor: 'rgba(0,0,0,0)'
  }
});
