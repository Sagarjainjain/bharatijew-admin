import * as api from "../api/index.js";
import { GETCATEGORY , POSTCATEGORY, DELETECATEGORY} from "../constants/actiontypes.js";

export const getCategory = () => async (dispatch) => {
  try {
    const { data } = await api.getCategory();
    dispatch({ type: GETCATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postCategory = (categorydata) => async (dispatch) => {
  try {
    const {data} = await api.postCategory(categorydata);
    dispatch({type: POSTCATEGORY, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await api.deleteCategory(id);
    dispatch({type: DELETECATEGORY, payload: id })
  } catch (error) {
    console.log(error)
  }
}