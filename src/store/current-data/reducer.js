import {
  clearCurrentOffer,
  getCurrentServer,
  setServerName,
  setServerType,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const initialState = {
  currentServer: {
    customer_id: 'user1',
    server_name: 'server7',
    server_type: 'vds',
  },
};

const currentServerData = createReducer(initialState, (builder) => {
  builder.addCase(getCurrentServer, (state, action) => {
    state.currentServer = action.payload;
  });
  builder.addCase(clearCurrentOffer, (state) => {
    state.currentServer = null;
  });
  builder.addCase(setServerName, (state, action) => {
    state.currentServer.server_name = action.payload;
  });
  builder.addCase(setServerType, (state, action) => {
    state.currentServer.server_type = action.payload;
  });
});

export default currentServerData;
