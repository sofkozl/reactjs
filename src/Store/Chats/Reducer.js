import { ADD_CHAT, SET_CHAT, DELETE_CHAT } from "./Actions";

const initialState = {
  chats: {},
};

export const chatsReducer = (state = initialState, action) => {

  switch(action.type){
    case ADD_CHAT: {
      return {
          chats: {
          ...state.chats,
          [action.payload.id]: action.payload,
        }
      }
    }
    case SET_CHAT: {
      return {
        chats: {...action.payload}
      }
    }
    case DELETE_CHAT: {
      if(!action.payload) {
        return state;
      }
      
      const chats = {...state.chats};
      delete chats[action.payload];
      return {
        chats
      }
    }
    
    default: {
      return state;
    }
  }
}
