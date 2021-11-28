import { ADD_CHAT, SET_CHAT, DELETE_CHAT } from "./Actions";

const initialState = {
  chats: [],
};

export const chatsReducer = (state = initialState, action) => {

  switch(action.type){

    case ADD_CHAT: {
      return {
          chats: [
          ...state.chats,
          action.payload,
        ]
      }
    }

    case SET_CHAT: {
      return {
        chats: [...action.payload]
      }
    }

    case DELETE_CHAT: {
      return {
        chats: state.chats.filter((item) => item.id !== action.payload)
      }
    }

    default: {
      return state;
    }
  }
}
