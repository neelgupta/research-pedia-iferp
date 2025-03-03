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
    console.log("paperid", paperId);
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

export const uploadfile = (formData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post("/user/chatWithDoc/uploadDoc", formData, {
      "Content-Type": "multipart/form-data",
    });
    console.log("res data", res);
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const chatwithdoc = (payload) => async (dispatch) => {
  const questionpayload = {
    question: payload,
  };
  dispatch(setLoading());
  try {
    const res = await api.post("/user/chatWithDoc", questionpayload);

    console.log("Question response", res);
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const padfilelink = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(
      `/user/chatWithDoc/extractPdfTextFromUrl?url=${encodeURIComponent(payload)}`
    );

    console.log("Question response", res);

    dispatch({
      type: "SET_PDF_TEXT",
      payload: res.data,
    });

    return res;
  } catch (error) {
    console.error("Error extracting PDF text:", error);
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};
