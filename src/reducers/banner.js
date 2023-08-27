import {
  GETBANNER,
  POSTBANNER,
  DELETEBANNER,
} from "../constants/actiontypes.js";

export const banner = (banner = [], action) => {
  switch (action.type) {
    case GETBANNER:
      return action.payload;
    case POSTBANNER:
      return [...banner, action.payload];
    case DELETEBANNER:
      return banner.filter((item) => item._id !== action.payload);
    default:
      return banner;
  }
};
