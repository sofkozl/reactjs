import { compareById } from '../../Helpers/Helpers';

export const getChats = (state) => state.chats;
export const getChatsList = (state) => getChats(state).chats;
export const getChatById = (chatId) => (state) => getChatsList(state).filter(compareById(chatId));
export const checkChatById = (chatId) => (state) => getChatsList(state).findIndex(compareById(chatId)) !== -1;