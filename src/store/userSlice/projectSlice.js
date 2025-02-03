import { api } from "@/services/api";
import {
  clearLoading,
  handelCatch,
  setLoading,
  showSuccess,
} from "../globalSlice";

export const addProject = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(`/user/project`, payload, {});
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

export const getProjectByTopics = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/user/project`, {});
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getRecommendedPapers = (query) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/user/recommendedPapers?${query}`, {});
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getRecommendedPapersById =
  (paperId, abstractId) => async (dispatch) => {
    dispatch(setLoading());

    try {
      let url = "/user/recommendedPapers/recommendedPaperById?";

      if (paperId !== undefined) {
        url += `paperId=${paperId}`;
      }

      if (abstractId !== undefined) {
        if (paperId) {
          url += `&abstract_id=${abstractId}`;
        } else {
          url += `abstract_id=${abstractId}`;
        }
      }

      console.log(url, "URL");

      const res = await api.get(url, {});

      dispatch(clearLoading());
      return res;
    } catch (error) {
      dispatch(handelCatch(error));
      dispatch(clearLoading());
    }
  };
