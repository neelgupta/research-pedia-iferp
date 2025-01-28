import { api } from "@/services/api";
import {
  clearLoading,
  handelCatch,
  setLoading,
  showSuccess,
} from "../globalSlice";

export const handleGoogleLogin = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/user/auth/google`, {});
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


export const handleUserLogin =
(payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(
      `/user/auth/login`,
      payload,
      {}
    );
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


