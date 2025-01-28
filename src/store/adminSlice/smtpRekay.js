import { api } from "@/services/api";
import { clearLoading, handelCatch, setLoading, showSuccess } from "../globalSlice";

export const handleTestSmtpAction =
(payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(
      `/admin/smtpRelay/testSmtp`,
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

export const handleCreateSmtpDetails =
(payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(
      `/admin/smtpRelay`,
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

export const handleGetSmtpDetails =
() => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(
      `/admin/smtpRelay`,
      {}
    );
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};