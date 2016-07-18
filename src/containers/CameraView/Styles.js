'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const tabHeight = 60;

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: width,
    height: height - tabHeight
  },
  cameraView: {
    flex: 1
  },
  bottomBar: {
    position: 'absolute',
    backgroundColor: '#242424',
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: tabHeight
  },
  captureButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: tabHeight,
    alignItems: 'center',
    justifyContent: 'center'
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
  bottomOverlay: {
    position: 'absolute',
    bottom: tabHeight + 30,
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
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 45/2,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  actionSheet: {
    width: width,
    height: 300,
    backgroundColor: 'rgba(255,255,255,1)'
  },
  actionSheetOverlay: {
    flex: 1
  },
  actionSheetButtonText: {
    color: '#0069d5',
    alignSelf: 'center',
    fontSize: 18
  },
  actionSheetRedButtonText: {
    color: '#e04343',
    alignSelf: 'center',
    fontSize: 18
  },
  actionSheetButton: {
    borderBottomColor: '#eee',
    height: 46,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  actionSheetHeader: {
    height: 36,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderBottomColor: '#eee',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  actionSheetHeaderText: {
    color: '#aaa',
    alignSelf: 'center',
    fontSize: 12
  }
});

export default styles;
