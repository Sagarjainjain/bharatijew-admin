import * as api from "../api/index.js";
import {
  GETLIVEGOLDRATE,
  POSTLIVEGOLDRATE,
  DELETELIVEGOLDRATE,
  GETLIVESILVERRATE,
  POSTLIVESILVERRATE,
  DELETELIVESILVERRATE,

} from "../constants/actiontypes.js";

export const getlivegoldrate = () => async (dispatch) => {
  try {
    const { data } = await api.getlivegoldrate();
    dispatch({ type: GETLIVEGOLDRATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postlivegoldrate = (categorydata) => async (dispatch) => {
  try {
    const { data } = await api.postlivegoldrate(categorydata);
    dispatch({ type: POSTLIVEGOLDRATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletelivegoldrate = (id) => async (dispatch) => {
  try {
    await api.deletelivegoldrate(id);
    dispatch({ type: DELETELIVEGOLDRATE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const getlivesilverrate = () => async (dispatch) => {
  try {
    const { data } = await api.getlivesilverrate();

    dispatch({ type: GETLIVESILVERRATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postlivesilverrate = (categorydata) => async (dispatch) => {
  try {
    const { data } = await api.postlivesilverrate(categorydata);
    dispatch({ type: POSTLIVESILVERRATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletelivesilverrate = (id) => async (dispatch) => {
  try {
    await api.deletelivesilverrate(id);
    dispatch({ type: DELETELIVESILVERRATE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
