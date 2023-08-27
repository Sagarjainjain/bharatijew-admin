import * as api from "../api/index.js";
import {
  GETBANNER,
  POSTBANNER,
  DELETEBANNER,
} from "../constants/actiontypes.js";

export const getBanner = () => async (dispatch) => {
  try {
    const { data } = await api.getbanner();
    dispatch({ type: GETBANNER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postBanner = (bannerdata) => async (dispatch) => {
  try {
    const { data } = await api.postbanner(bannerdata);
    dispatch({ type: POSTBANNER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBanner = (id) => async (dispatch) => {
  try {
    await api.deletebanner(id);
    dispatch({ type: DELETEBANNER, payload: id });
  } catch (error) {
    console.log(error);
  }
};
