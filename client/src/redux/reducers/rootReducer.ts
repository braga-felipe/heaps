import { combineReducers } from 'redux';
import { items } from './items';
import { user } from './user';

export const rootReducer = combineReducers({
  items,
  user,
});
