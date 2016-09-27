// Core Components
import { Dimensions, Platform } from 'react-native';

// Device Metrics Sizes
const { width, height } = Dimensions.get('window');

const Metrics = {
  screenWidth: width,
  screenHeight: height,
  margin: {
    extraSmall: 2,
    small: 5,
    medium: 10,
    large: 15,
    extraLarge: 20
  },
  padding: {
    extraSmall: 2,
    small: 5,
    medium: 10,
    large: 15,
    extraLarge: 20
  },
  icons: {
    extraSmall: 15,
    small: 20,
    medium: 30,
    large: 45,
    extraLarge: 60,
    capture: 75
  },
  tabHeight: (Platform.OS === 'ios') ? 60 : 80
}

export default Metrics;
