'use strict';

// Core Components
import React, { Component } from 'react';
import { View, Image } from 'react-native';

// Components
import OverlayTouchableIcon from '../OverlayTouchableIcon/OverlayTouchableIcon';
// import Share from 'react-native-cross-share';

// Styles
import Styles from './Styles';

export default class CameraComponent extends Component {
  constructor(props) {
    super(props);

    // Binding `this`
    // this._onShare = this._onShare.bind(this);
  }

  /*
  ** Sharing Capabilities
  */

  // _onShare() {
  //   Share.open({
  //     share_text: "Check this picture out!",
  //     share_URL: this.state.path,
  //     title: "Share Photo"
  //   },(e) => {
  //     console.log(e);
  //   });
  // }

  /*
  ** Return to Camera
  */

  _returnToCamera() {
    this.props.returnToCamera();
  }

  /*
  ** Render Photo Component
  */

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
