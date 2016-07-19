import { TAKE_PHOTO } from '../constants/actionTypes';

const initialState = {
  photo: 'hello'
};

export default (state = initialState, action) => {
  // Reactotron.log('action: ', action);
  switch (action.type) {
    case TAKE_PHOTO:
      return {
        ...state,
        photo
      }
    default:
      return state;
  }
}
