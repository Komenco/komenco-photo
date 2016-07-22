import { StyleSheet, Dimensions, Platform } from 'react-native';

const tabHeight = (Platform.OS === 'ios') ? 60 : 80;
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  previewView: {
    flex: 1,
    width: width,
    height: height
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
    paddingTop: (Platform.OS === 'ios') ? 10 : 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0)'
  }
});

export default styles;