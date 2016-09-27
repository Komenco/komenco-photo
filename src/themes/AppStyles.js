import Metrics from './Metrics';
import Colors from './Colors';

const AppStyles = {
  app: {
    mainContainer: {
      flex: 1,
      width: Metrics.screenWidth,
      height: Metrics.screenHeight,
      backgroundColor: Colors.transparent
    },
    fullScreen: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  }
}

export default AppStyles;
