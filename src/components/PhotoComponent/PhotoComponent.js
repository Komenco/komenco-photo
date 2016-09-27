// Core Components
import React, { Component, PropTypes } from 'react';
import { View, Image } from 'react-native';

// Components
import OverlayTouchableIcon from '../OverlayTouchableIcon/OverlayTouchableIcon';

// Styles
import Styles from './Styles';

class PhotoComponent extends Component {
  constructor(props) {
    super(props);
  }

  _returnToCamera() {
    this.props.returnToCamera();
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <Image
          source={{
            isStatic: true,
            uri: this.props.photo,
          }}
          style={Styles.fullScreen}
        />
        <View style={Styles.topOverlay}>
          <OverlayTouchableIcon
            iconName='chevron-left'
            iconSize={50}
            color='#ffffff'
            onPress={this.props.returnToCamera}
          />
          <OverlayTouchableIcon
            iconName='external-link'
            iconSize={50}
            color='#ffffff'
            onPress={this.props.returnToCamera}
          />
        </View>
      </View>
    )
  }
}

PhotoComponent.propTypes = {
  returnToCamera: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired
};

export default PhotoComponent;
