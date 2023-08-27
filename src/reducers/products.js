import {
  GETPRODUCTS,
  POSTPRODUCTS,
  DELETEPRODUCTS,
} from "../constants/actiontypes.js";

export const products = (products = [], action) => {
  switch (action.type) {
    case GETPRODUCTS:
      return action.payload;
    case POSTPRODUCTS:
      return [...products, action.payload];
    case DELETEPRODUCTS:
      return products.filter((item) => item._id !== action.payload);
    default:
      return products;
  }
};
