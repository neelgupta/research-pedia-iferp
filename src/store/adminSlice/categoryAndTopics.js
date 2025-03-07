import { api } from "@/services/api";
import {
  clearLoading,
  handelCatch,
  setLoading,
  showSuccess,
} from "../globalSlice";

export const handleGetTopics =
  (skip, limit, searchQuery) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await api.get(
        `/admin/topics?skip=${skip}&limit=${limit}&search=${searchQuery || ""}`,
        {}
      );
      dispatch(clearLoading());
      return res;
    } catch (error) {
      dispatch(handelCatch(error));
      dispatch(clearLoading());
    }
  };

export const handleGetMe = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/user/userProfile/getMe`, {});
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

export const handleGetCategories = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/user/category`, {});
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const handleGetTopicByCatId = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/admin/topics/topicsbyId?catId=${id}`, {});
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};
