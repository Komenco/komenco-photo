import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../themes/index';

const Styles = StyleSheet.create({
  overlay: {
    width: Metrics.icons.large,
    height: Metrics.icons.large,
    borderRadius: Metrics.icons.large/2,
    backgroundColor: Colors.transparent
  }
});

export default Styles;
