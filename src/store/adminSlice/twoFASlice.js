import { api } from "@/services/api";
import {
  clearLoading,
  handelCatch,
  setLoading,
  showSuccess,
} from "../globalSlice";

export const handleGenerateCode = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(`/admin/multifactorAuth`, payload, {});
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


export const getGeneratedCode = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/admin/multifactorAuth`, {});

    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

// export const getCodeData = () => async (dispatch) => {
//   dispatch(setLoading());
//   try {
//     const res = await api.get(`/admin/securityCode`, {});

//     dispatch(clearLoading());
//     return res;
//   } catch (error) {
//     dispatch(handelCatch(error));
//     dispatch(clearLoading());
//   }
// };

export const handleDownLoadExcelSheet = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(
      `/admin/multifactorAuth/downloadExcelSheet`,
      {},
      { responseType: "blob" }
    );
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const loginWithTwoFacorAuth = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(`/admin/auth/logInWith2FaCode`, payload, {});
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
