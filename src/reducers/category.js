import { GETCATEGORY, POSTCATEGORY , DELETECATEGORY} from "../constants/actiontypes.js";

export const category = (category = [], action) => {
  switch (action.type) {
    case GETCATEGORY:
        return action.payload;
    case POSTCATEGORY: 
        return [...category, action.payload]
    case DELETECATEGORY:
      return category.filter((item) => item._id !== action.payload)
    default:
      return category;
  }
};
