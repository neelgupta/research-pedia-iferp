import { api } from "@/services/api";
import {
  clearLoading,
  handelCatch,
  setLoading,
  showSuccess,
} from "../globalSlice";

export const handleGetTopics = (skip,limit) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/admin/topics?skip=${skip}&limit=${limit}`, {});
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const updateTopicsPriority = (id, payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.put(`/admin/topics?id=${id}`, payload, {});
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
