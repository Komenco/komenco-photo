import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class OverlayTouchableImage extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
        source={this.props.imageSource}
        style={styles.overlayTouchable}/>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  overlayTouchable: {
    width: 45,
    height: 45,
    borderRadius: 45/2,
    backgroundColor: 'rgba(0,0,0,0)'
  }
});
