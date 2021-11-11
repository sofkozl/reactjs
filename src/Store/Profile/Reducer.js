import { toggleShowProfile } from './Actions';

const initialState = {
    showName: false,
    }

export const profileReducer = (state = initialState, action) => {
  
    switch (action.type) {
    case toggleShowProfile:
        return {
        showName: !state.showName
        }
    default: {
        return state
    }
  }
}