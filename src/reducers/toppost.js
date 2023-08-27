import {
  GETTOPPOST,
  POSTTOPPOST,
  DELETETOPPOST,
} from "../constants/actiontypes.js";

export const toppost = (toppost = [], action) => {
  switch (action.type) {
    case GETTOPPOST:
      return action.payload;
    case POSTTOPPOST:
      return [...toppost, action.payload];
    case DELETETOPPOST:
      return toppost.filter((item) => item._id !== action.payload);
    default:
      return toppost;
  }
};
