'use strict';

// Core Components
import React, { Component } from 'react';
import { View, Image } from 'react-native';

// Components
import OverlayTouchableIcon from './OverlayTouchableIcon';
import Share from 'react-native-cross-share';

// Styles
import styles from '../containers/CameraContainer/styles';

export default class CameraComponent extends Component {
  constructor(props) {
    super(props);

    // Binding `this`
    this._onShare = this._onShare.bind(this);
  }

  /*
  ** Sharing Capabilities
  */

  _onShare() {
    Share.open({
      share_text: "Check this picture out!",
      share_URL: this.state.path,
      title: "Share Photo"
    },(e) => {
      console.log(e);
    });
  }

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
      <View style={styles.view}>
        <Image
          source={{
            isStatic: true,
            uri: this.props.photo,
          }}
          style={styles.image}
        />
        <View style={styles.topOverlay}>
          <OverlayTouchableIcon
            name='chevron-left'
            size='50'
            color='#ffffff'
            onPress={this._returnToCamera}
          />
          <OverlayTouchableIcon
            name='external-link'
            size='50'
            color='#ffffff'
            onPress={this._onShare}
          />
        </View>
      </View>
    )
  }
}
