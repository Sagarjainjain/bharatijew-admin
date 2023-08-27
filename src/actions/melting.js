import * as api from "../api/index.js";
import {
  GETMELTING,
  POSTMELTING,
  DELETEMELTING,
} from "../constants/actiontypes.js";

export const getMelting = () => async (dispatch) => {
  try {
    const { data } = await api.getMelting();
    dispatch({ type: GETMELTING, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postMelting = (meltingData) => async (dispatch) => {
  try {
    const { data } = await api.postMelting(meltingData);
    dispatch({ type: POSTMELTING, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMelting = (id) => async (dispatch) => {
  try {
    await api.deleteMelting(id);
    dispatch({ type: DELETEMELTING, payload: id });
  } catch (error) {
    console.log(error);
  }
};
