import { createMessage } from '../../Helpers/Helpers';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGES = 'DELETE_MESSAGES';

export const addMessage = (message, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    message,
    chatId,
  },
});

export const deleteMessages = (chatId) => ({
  type: DELETE_MESSAGES,
  payload: chatId,
});

export const automaticMessage = (author, text, chatId) => (dispatch) => {
  const userMessage = createMessage(author, text);
  dispatch(addMessage(userMessage, chatId));

  if (author === 'bot') {
    return;
  }

  const botMessage = createMessage('bot', 'An automatic reply');

  dispatch(addMessage(botMessage, chatId));
};