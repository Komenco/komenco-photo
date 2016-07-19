'use strict';

import { StyleSheet, Dimensions } from 'react-native';

//TODO: fix the window.width situation
const styles = StyleSheet.create({
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: window.height,
    width: window.width,
    position: 'absolute'
  }
});

export default styles;
