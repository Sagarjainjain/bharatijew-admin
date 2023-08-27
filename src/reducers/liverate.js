import {
GETLIVEGOLDRATE,
POSTLIVEGOLDRATE,
DELETELIVEGOLDRATE,
GETLIVESILVERRATE,
POSTLIVESILVERRATE,
DELETELIVESILVERRATE,
} from "../constants/actiontypes.js";

export const goldrate = (goldrate = [], action) => {
  switch (action.type) {
    case GETLIVEGOLDRATE:
      return action.payload;
    case POSTLIVEGOLDRATE:
      return [...goldrate, action.payload];
    case DELETELIVEGOLDRATE:
      return goldrate.filter((item) => item._id !== action.payload);
    default:
      return goldrate;
  }
};
export const silverrate = (silverrate = [], action) => {
  switch (action.type) {
    case GETLIVESILVERRATE:
      return action.payload;
    case POSTLIVESILVERRATE:
      return [...silverrate, action.payload];
    case DELETELIVESILVERRATE:
      return silverrate.filter((item) => item._id !== action.payload);
    default:
      return silverrate;
  }
};
