import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors } from '../../themes/index';

const Styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    bottom: (Platform.OS === 'ios') ? 20 : 40,
    height: Metrics.icons.capture,
    width: Metrics.icons.capture,
    borderColor: Colors.white,
    borderWidth: 3,
    borderRadius: Metrics.icons.capture/2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: Metrics.icons.large,
    height: Metrics.icons.large
  }
});

export default Styles;
