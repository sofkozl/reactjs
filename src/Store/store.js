import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { chatsReducer } from './Chats/Reducer';
import { profileReducer } from './Profile/Reducer';
import { messagesReducer } from './Messages/Reducer';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  chats: chatsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);