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

export const getTopPapers = (query) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(
      `/user/recommendedPapers/networkPost?${query}`,
      {}
    );

    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getUserInterest = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/user/recommendedUser`, {});

    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getAuthorSocialDetails = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(
      `/user/recommendedPapers/getAuthorsDetails?id=${id}`,
      {}
    );
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

      const res = await api.get(url, {});

      dispatch(clearLoading());
      return res;
    } catch (error) {
      dispatch(handelCatch(error));
      dispatch(clearLoading());
    }
  };

export const TextTospeech = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(
      `/user/googleTranslate/textToSpeech`,
      payload,
      {}
    );

    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const Literaturesearch = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(
      `/user/literatureReview/authoComplete?search=${payload}`,
      {}
    );

    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const LiteraturesearchResult = (payload) => async (dispatch) => {
  const { title, selectedPaper } = payload;

  dispatch(setLoading());
  try {
    const res = await api.get(
      `/user/literatureReview?title=${title}&limit=${selectedPaper}`,
      {}
    );
    console.log("LiteraturesearchResult", res);
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const SaveToNote = (payload) => async (dispatch) => {
  console.log("SaveToNotebook", payload);

  dispatch(setLoading());
  try {
    const res = await api.post(`/user/saveToNote/`, payload, {});
    console.log("LiteraturesearchResult", res);
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};
