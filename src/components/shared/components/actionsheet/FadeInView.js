'use strict';

import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import styles from './FadeStyles';


export default class FadeInView extends Component {
  getInitialState() {
    return {
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this._animate(this.props);
  }

  componentWillReceiveProps(newProps) {
    this._animate(newProps);
  }

  _animate(newProps) {
    return Animated.timing(this.state.fadeAnim, {
      toValue: newProps.visible ? 0.7 : 0,
      duration: 300
    }).start();
  }

  render() {
    return (
      <Animated.View style={[styles.overlay,
          {opacity: this.state.fadeAnim},
          {backgroundColor: this.props.backgroundColor || 'black' }
        ]}>
        {this.props.children}
      </Animated.View>
    );
  }
};
