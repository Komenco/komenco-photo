import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class BottomOverlay extends Component {
  render() {
    return (
      <View style={styles.bottomOverlay}>
        <OverlayTouchable
          onPress={this._toggleCameraType}
          imageSource={require('../../../assets/switch.png')}
        />
        <OverlayTouchable
          onPress={this._toggleTorchMode}
          imageSource={require('../../../assets/flash-on.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomOverlay: {
    position: 'absolute',
    bottom: (Platform.OS === 'ios') ? tabHeight + 30 : tabHeight,
    left: 0,
    right: 0,
    width: width,
    height: tabHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
  }
});
