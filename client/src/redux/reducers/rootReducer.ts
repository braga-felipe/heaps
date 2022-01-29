import { combineReducers } from 'redux';
import { items } from './item';
import { user } from './user';

export const rootReducer = combineReducers({
  items,
  user,
});
