import { mapMessageSnapshotToMessage } from '../../Helpers/Helpers';
import { messagesRef } from '../../Services/Firebase';

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

export const deleteMessagesWithThunk = (chatId) => (dispatch) => {
  messagesRef.child(chatId).remove(() => {
    dispatch(deleteMessages(chatId));
  })
}

export const addMessageWithThunk = (message, chatId) => () => {
  messagesRef.child(chatId).push(message);
}

export const onTrackAddMessageWithThunk = (chatId) => (dispatch) => {
  messagesRef.child(chatId).on('child_added', (snapshot) => {
    dispatch(addMessage(mapMessageSnapshotToMessage(snapshot), chatId))
  })
}

export const offTrackAddMessageWithThunk = (chatId) => () => {
  messagesRef.child(chatId).off('child_added')
}

export const onTrackDeleteMessagesWithThunk = (chatId) => (dispatch) => {
  messagesRef.child(chatId).on('child_removed', () => {
    dispatch(deleteMessages(chatId))
  })
}

export const offTrackDeleteMessagesWithThunk = (chatId) => () => {
  messagesRef.child(chatId).off('child_removed')
}


