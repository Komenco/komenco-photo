/**
 * Komenco Photo React Naitve Application
 * Author: André Neves
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import OverlayTouchable from '../../components/OverlayTouchable';
import Share from 'react-native-cross-share';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './styles';

export default class PreviewContainer extends Component {
  constructor(props) {
    super(props);
    this._onShare = this._onShare.bind(this);
  }

  _onShare() {
    Share.open({
      share_text: "Check this picture out!",
      share_URL: this.props.data,
      title: "Share Photo"
    },(e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <View style={styles.previewView}>
        <Image
          source={{
            isStatic: true,
            uri: this.props.data,
          }}
          style={styles.image}
        />
        <View style={styles.topOverlay}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={Actions.camera}>
            <Icon
              name='chevron-left'
              size={50}
              color='rgba(255,255,255,1)'
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={this._onShare}>
            <Icon
              name='external-link'
              size={50}
              color='rgba(255,255,255,1)'
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
