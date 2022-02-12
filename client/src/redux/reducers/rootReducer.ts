import { combineReducers } from 'redux';
import { items } from './items';
import { user } from './user';
import { chats } from './chats';
export const rootReducer = combineReducers({
  items,
  user,
  chats,
});
