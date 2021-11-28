export const ADD_CHAT = 'ADD_CHAT';
export const SET_CHAT = 'SET_CHAT';
export const DELETE_CHAT = 'DELETE_CHAT';

export const addChat = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
});

export const setChat = (chats) => ({
  type: SET_CHAT,
  payload: chats,
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  payload: chatId,
});
