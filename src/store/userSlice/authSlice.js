import { api } from "@/services/api";
import {
  clearLoading,
  handelCatch,
  setLoading,
  showSuccess,
} from "../globalSlice";
import { storeLocalStorageData } from "@/utils/helpers";

export const handleGoogleLogin = (credential) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(`/user/auth/google`, credential, {});

    console.log(res, "res google login");
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

export const handleUserLogin = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(`/user/auth/login`, payload, {});
    // if (res?.status === 200) {
    //   dispatch(showSuccess(res?.data?.message));
    // }
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const handleUserSignUp = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(`/user/auth/signUp`, payload, {});
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

export const handleUpdateGoogleProfile = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.put(
      `/user/userProfile/updateGoogleProfile`,
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
