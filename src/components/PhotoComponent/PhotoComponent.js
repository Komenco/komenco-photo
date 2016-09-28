import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';

import OverlayTouchableIcon from '../OverlayTouchableIcon/OverlayTouchableIcon';

import Styles from './Styles';

const PhotoComponent = ({returnToCamera, photo}) => (
  <View style={Styles.mainContainer}>
    <Image
      source={{
        isStatic: true,
        uri: photo,
      }}
      style={Styles.fullScreen}
    />
    <View style={Styles.topOverlay}>
      <OverlayTouchableIcon
        iconName='chevron-left'
        iconSize={50}
        color='#ffffff'
        onPress={returnToCamera}
      />
      <OverlayTouchableIcon
        iconName='external-link'
        iconSize={50}
        color='#ffffff'
        onPress={returnToCamera}
      />
    </View>
  </View>
);

PhotoComponent.propTypes = {
  returnToCamera: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired
};

export default PhotoComponent;
