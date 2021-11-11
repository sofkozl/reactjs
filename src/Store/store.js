import { createStore } from 'redux';
import { profileReducer } from './Profile/Reducer';

export const store = createStore(profileReducer);