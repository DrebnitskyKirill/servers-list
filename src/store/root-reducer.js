import { combineReducers } from "redux";
import data from "./data/reducer";
import currentData from "./current-data/reducer";

export const NameSpace = {
  DATA: `DATA`,
  CURRENT_DATA: `CURRENT_DATA`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CURRENT_DATA]: currentData,
});
