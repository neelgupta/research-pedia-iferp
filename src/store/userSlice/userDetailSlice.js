import { api } from "@/services/api";
import {
  clearLoading,
  handelCatch,
  setLoading,
  showSuccess,
} from "../globalSlice";



export const handleForgetPassword =
(payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(
      `/user/auth/forgot-password`,
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

export const handleVerifyCode =
(payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(
      `/user/auth/verify-code`,
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

export const handleResetPassword =
(payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(
      `/user/auth/reset-password`,
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

export const getDepartment = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get("/user/userProfile/getDepartmet", {});

    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getInstitution = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get("/user/userProfile/getInstitutionList", {});

    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getUniverisity = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get("/user/userProfile/getUniversity", {});
    if (res?.status === 201) {
      dispatch(showSuccess(res?.data?.message));
    }
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getCountry = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/user/userProfile/getCountry`, {});
    if (res?.status === 201) {
      dispatch(showSuccess(res?.data?.message));
    }
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getState = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/user/userProfile/getState?country_id=${id}`, {});
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getCity = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/user/userProfile/getCity?state_id=${id}`, {});
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getCourse = (type) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(
      `/user/userProfile/getCourseByType?courseType=${type}`,
      {}
    );
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getProfessionalMemberDetails = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(
      `/user/userProfile/professionalMemberProfile?id=${id}`,
      {}
    );
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const getStudentMemberDetails = (id) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await api.get(
        `/user/userProfile/studentMemberProfile?id=${id}`,
        {}
      );
      dispatch(clearLoading());
      return res;
    } catch (error) {
      dispatch(handelCatch(error));
      dispatch(clearLoading());
    }
  };


  export const getInstitutionalMemberDetails =
  (id, payload) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await api.put(
        `/user/userProfile/institutionalMemberProfile?id=${id}`,
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

  

export const updateProfessionalMemberDetails =
  (id, payload) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await api.put(
        `/user/userProfile/professionalMemberProfile?id=${id}`,
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



