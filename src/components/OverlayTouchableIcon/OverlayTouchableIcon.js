import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import Styles from './Styles';

const OverlayTouchableIcon = ({onPress, iconName, iconSize, color}) => (
  <TouchableOpacity
    style={Styles.overlay}
    onPress={onPress}>
    <Icon
      name={iconName}
      size={iconSize}
      color={color}
    />
  </TouchableOpacity>
);

OverlayTouchableIcon.propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  color: PropTypes.string
}

export default OverlayTouchableIcon;
