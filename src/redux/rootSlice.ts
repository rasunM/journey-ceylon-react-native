import {combineReducers} from '@reduxjs/toolkit';
import authSlice, {clearAuth} from './slices/authSlice';

const appSlice = combineReducers({
  auth: authSlice,
});

const rootSlice = (state: any, action: any) => {
  if (action.type === clearAuth.type) {
    state = undefined;
  }
  return appSlice(state, action);
};

export default rootSlice;
