'use strict';

import { StyleSheet } from 'react-native';
import { AppStyles, Metrics } from '../../themes/index';

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
  }
});

export default Styles;
