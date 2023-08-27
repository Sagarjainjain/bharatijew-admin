import * as api from "../api/index.js";
import {
  GETPRODUCTS,
  POSTPRODUCTS,
  DELETEPRODUCTS,
} from "../constants/actiontypes.js";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProduct();
    dispatch({ type: GETPRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postProducts = (productdata) => async (dispatch) => {
  try {
    const { data } = await api.postProduct(productdata);
    dispatch({ type: POSTPRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProducts = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);
    dispatch({ type: DELETEPRODUCTS, payload: id });
  } catch (error) {
    console.log(error);
  }
};
