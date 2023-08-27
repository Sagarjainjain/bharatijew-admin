import * as api from "../api/index.js";
import {
  GETTOPPOST,
  POSTTOPPOST,
  DELETETOPPOST,
} from "../constants/actiontypes.js";
export const gettoppost = () => async (dispatch) => {
  try {
    const { data } = await api.gettoppost();
    dispatch({ type: GETTOPPOST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const posttoppost = (productdata) => async (dispatch) => {
  try {
    const { data } = await api.posttoppost(productdata);
    dispatch({ type: POSTTOPPOST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletetoppost = (id) => async (dispatch) => {
  try {
    await api.deletetoppost(id);
    dispatch({ type: DELETETOPPOST, payload: id });
  } catch (error) {
    console.log(error);
  }
};
