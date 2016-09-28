import React, { PropTypes } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import Styles from './Styles';

const CaptureButton = ({takePicture}) => (
  <View style={Styles.container}>
    <TouchableOpacity
      style={Styles.wrapper}
      onPress={takePicture}>
      <Image
        source={require('../../../assets/camera.png')}
        style={Styles.button}
      />
    </TouchableOpacity>
  </View>
);

CaptureButton.propTypes = {
  takePicture: PropTypes.func.isRequired
}

export default CaptureButton;
