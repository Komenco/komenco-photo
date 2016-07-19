'use strict';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    padding: 8,
    paddingBottom: 0,
    justifyContent: "flex-end"
  },
  buttonText: {
    color: '#0069d5',
    alignSelf: 'center',
    fontSize: 18
  },
  button: {
    height: 36,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

});

export default styles;
