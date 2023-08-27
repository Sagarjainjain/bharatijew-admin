import {LOGIN} from "../constants/actiontypes";
import * as api from "../api/index.js"

export const loginAccount = (logindata, navigate, toast) => async (dispatch) => {
  try {
    const { data } = await api.loginuser(logindata);
    dispatch({ type: LOGIN, data });
    navigate("/admin");
    window.location.reload();
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
