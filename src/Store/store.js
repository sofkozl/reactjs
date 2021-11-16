import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './Chats/Reducer';
import { profileReducer } from './Profile/Reducer';
import { messagesReducer } from './Messages/Reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  chats: chatsReducer,
});

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());