import { TOGGLE_SHOW_PROFILE } from './Actions';

const initialState = {
    showName: false,
    }

export const profileReducer = (state = initialState, action) => {
  
    switch(action.type) {
    case TOGGLE_SHOW_PROFILE:
        return {
        showName: !state.showName,
        }
    default: {
        return state;
    }
  }
}