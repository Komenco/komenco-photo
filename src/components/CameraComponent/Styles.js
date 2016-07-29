'use strict';

import { StyleSheet } from 'react-native';
import { AppStyles, Metrics, Colors } from '../../themes/index';

const Styles = StyleSheet.create({
  ...AppStyles.app,
  topOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: Metrics.screenWidth,
    height: Metrics.tabHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Metrics.padding.medium,
    paddingLeft: Metrics.padding.medium,
    paddingRight: Metrics.padding.medium,
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: Metrics.screenWidth,
    height: Metrics.tabHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 0,
    paddingLeft: Metrics.padding.medium,
    paddingRight: Metrics.padding.medium,
    backgroundColor: Colors.transparent
  }
});

export default Styles;
