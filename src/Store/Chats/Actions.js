import { chatsRef } from "../../Services/Firebase";
import { mapChatSnapshotToChat } from "../../Helpers/Helpers";


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

export const deleteChatWithThunk = (chatId) => (dispatch) => {
  chatsRef.child(chatId).remove(() => {
    dispatch(deleteChat(chatId));
  });
}

export const addChatWithThunk = (chat) => () => {
  chatsRef.push(chat);
}

export const onTrackAddChatWithThunk = (dispatch) => {
  chatsRef.on('child_added', (snapshot) => {
    dispatch(addChat(mapChatSnapshotToChat(snapshot)))
  })
}

export const offTrackAddChatWithThunk = () => {
  chatsRef.off('child_added')
}

export const onTrackDeleteChatWithThunk = (dispatch) => {
  chatsRef.on('child_removed', (snapshot) => {
    dispatch(dispatch(deleteChat(snapshot.key)))
  })
}

export const offTrackDeleteChatWithThunk = () => {
  chatsRef.off('child_removed')
}



