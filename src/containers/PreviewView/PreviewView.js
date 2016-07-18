/**
 * Komenco Photo React Naitve Application
 * Author: André Neves
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class PreviewView extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.previewView}>
        <Image
          source={{
            isStatic: true,
            uri: `data:image/jpeg;base64,${this.props.data}`,
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
        </View>
      </View>
    );
  }
}

const tabHeight = 60;
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: width,
    height: height - tabHeight
  },
  previewView: {
    flex: 1
  },
  topOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: width,
    height: tabHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0)'
  }
});
