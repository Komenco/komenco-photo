import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import Styles from './Styles';

class OverlayTouchableImage extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
        source={this.props.imageSource}
        style={Styles.overlay}/>
      </TouchableOpacity>
    );
  }
}

OverlayTouchableImage.propTypes = {
  onPress: PropTypes.func,
  imageSource: PropTypes.number.isRequired
};

export default OverlayTouchableImage;
