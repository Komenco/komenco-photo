'use strict';

import React, { Component } from 'react';
import { TouchableOpacity, View, Modal } from 'react-native';
import FadeInView from './FadeInView';
import styles from './Styles';

export default class ActionSheetModal extends Component {
  render() {
    return (
      <FadeInView visible={this.props.modalVisible} backgroundColor={this.props.backgroundColor}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={this.props.onCancel}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.container} onPress={this.props.onCancel}></TouchableOpacity>
            {this.props.children}
            <TouchableOpacity style={styles.button} onPress={this.props.onCancel}>
              <Text style={styles.buttonText}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </FadeInView>
    );
  }
};
