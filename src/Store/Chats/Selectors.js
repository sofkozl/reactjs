import { compareById } from '../../Helpers/Helpers';

export const getChats = (state) => state.chats;
export const getChatList = (state) => getChats(state).chats;
export const getChatById = (chatId) => (state) => getChatList(state).filter(compareById(chatId));
export const checkChatById = (chatId) => (state) => getChatList(state).findIndex(compareById(chatId)) !== -1;