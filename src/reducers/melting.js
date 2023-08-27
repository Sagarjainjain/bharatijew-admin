import {
  GETMELTING,
  POSTMELTING,
  DELETEMELTING,
} from "../constants/actiontypes.js";

export const melting = (melting = [], action) => {
  switch (action.type) {
    case GETMELTING:
      return action.payload;
    case POSTMELTING:
      return [...melting, action.payload];
    case DELETEMELTING:
      return melting.filter((item) => item._id !== action.payload);
    default:
      return melting;
  }
};
