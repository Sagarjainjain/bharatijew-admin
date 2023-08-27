import * as api from "../api/index.js";
import {
  GETSUBCATEGORY,
  POSTSUBCATEGORY,
  DELETESUBCATEGORY,
} from "../constants/actiontypes.js";

export const getSubCategory = () => async (dispatch) => {
  try {
    const { data } = await api.getSubCategory();
    dispatch({ type: GETSUBCATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postSubCategory = (categorydata) => async (dispatch) => {
  try {
    const { data } = await api.postSubCategory(categorydata);
    dispatch({ type: POSTSUBCATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSubCategory = (id) => async (dispatch) => {
  try {
    await api.deleteSubCategory(id);
    dispatch({ type: DELETESUBCATEGORY, payload: id });
  } catch (error) {
    console.log(error);
  }
};
