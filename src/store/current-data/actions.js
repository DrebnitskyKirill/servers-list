import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_CURRENT_SERVER: "current/loadCurrentServer",
  CLEAR_CURRENT_STATE: "current/clearCurrentState",
  SET_SERVER_NAME: "current/setServerName",
  SET_SERVER_TYPE: "current/setServerType",
};

export const getCurrentServer = createAction(
  ActionType.LOAD_CURRENT_SERVER,
  (server) => ({
    payload: server,
  })
);

export const clearCurrentOffer = createAction(ActionType.CLEAR_CURRENT_STATE);

export const setServerName = createAction(
  ActionType.SET_SERVER_NAME,
  (name) => ({
    payload: name,
  })
);

export const setServerType = createAction(
  ActionType.SET_SERVER_TYPE,
  (type) => ({
    payload: type,
  })
);
