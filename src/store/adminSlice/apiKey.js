import { api } from "@/services/api";
import {
  clearLoading,
  handelCatch,
  setLoading,
  showSuccess,
} from "../globalSlice";

export const handlepostapiKey = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post("/admin/apikey", payload, {});
    if (res?.status === 200) {
      dispatch(showSuccess(res?.data?.message));
    }
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const handlegetapiKey = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get("/admin/apikey", {});
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};
