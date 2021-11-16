export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGES = 'DELETE_MESSAGES';

export const addMessage = (message, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    message,
    chatId,
  },
});

export const deleteMessage = (chatId) => ({
  type: DELETE_MESSAGES,
  payload: chatId,
});