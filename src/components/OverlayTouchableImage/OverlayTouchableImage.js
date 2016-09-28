import React, { PropTypes } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import Styles from './Styles';

const OverlayTouchableImage = ({onPress, imageSource}) => (
  <TouchableOpacity onPress={onPress}>
    <Image
    source={imageSource}
    style={Styles.overlay}/>
  </TouchableOpacity>
);

OverlayTouchableImage.propTypes = {
  onPress: PropTypes.func,
  imageSource: PropTypes.number.isRequired
};

export default OverlayTouchableImage;
