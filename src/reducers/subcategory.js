import {
  GETSUBCATEGORY,
  POSTSUBCATEGORY,
  DELETESUBCATEGORY,
} from "../constants/actiontypes.js";

export const subcategory = (subcategory = [], action) => {
  switch (action.type) {
    case GETSUBCATEGORY:
      return action.payload;
    case POSTSUBCATEGORY:
      return [...subcategory, action.payload];
    case DELETESUBCATEGORY:
      return subcategory.filter((item) => item._id !== action.payload);
    default:
      return subcategory;
  }
};
