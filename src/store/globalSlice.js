import { createSlice } from "@reduxjs/toolkit";
import { api } from "services/api";
import { encrypt, storeLocalStorageData } from "utils/helpers";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const initialState = {
  loading: false,
  authData: null,
  errorData: null,
  sidebarOpen: true,
  isregisterpopup: false,
  isUserSide: true,
  isRightSide: false,
  rightSideObj: {},
  isTopics: false,
  isModalOpen: false,
  isprojectselect: false,
  iseditprojectselect: false,
  isdeleteprojectselect: false,
  iscreateprojectselect: false,
  selectedProject: null,
  isSearchActive: false,
  isProjectCreate: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setAuthData(state, action) {
      state.authData = action.payload;
    },
    setErrorData(state, action) {
      state.errorData = action.payload;
    },
    setIsUserSide(state, action) {
      state.isUserSide = action.payload;
    },
    setIsRightSide(state, action) {
      state.isRightSide = action.payload;
    },
    setRightSideObj(state, action) {
      state.rightSideObj = action.payload;
    },
    setIsTopics(state, action) {
      state.isTopics = action.payload;
    },

    toggleSidebar(state, action) {
      state.sidebarOpen = action.payload;
    },
    registermodel(state, action) {
      state.isregisterpopup = action.payload;
    },
    resetAllState(state) {
      state.authData = null;
      state.errorData = null;
      state.isUserSide = true;
      state.isRightSide = false;
      state.rightSideObj = {};
    },
    setIsModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
    setIsProjectselectOpen(state, action) {
      state.isprojectselect = action.payload;
    },
    setIsEditProjectselectOpen(state, action) {
      state.iseditprojectselect = action.payload;
    },
    setIsDeleteProjectselectOpen(state, action) {
      state.isdeleteprojectselect = action.payload;
    },
    setIsCreateProjectselectOpen(state, action) {
      state.iscreateprojectselect = action.payload;
    },
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    setisSearchActive: (state, action) => {
      state.isSearchActive = action.payload;
    },
    setIsProjectCreate: (state, action) => {
      state.isProjectCreate = action.payload;
    },
  },
});

export const handleLogin = (payload) => async (dispatch) => {
  try {
    const res = await api.post("/admin/auth/login", payload, {});

    if (res?.status === 200) {
      const isGenerated = res.data.response.isGenerated || false;
      if (isGenerated) {
        return res
      } else {
        storeLocalStorageData({
          ...res?.data.response,
          token: res?.data?.response?.token,
        });
        dispatch(
          setAuthData(
            encrypt({ ...res?.data.response, token: res?.data?.response.token })
          )
        );
        dispatch(showSuccess(res?.data?.message));
      }
    }

    return res;
  } catch (error) {
    return dispatch(handelCatch(error));
  }
};

export const forgotpasswordsendemail = (payload) => async (dispatch) => {
  try {
    const res = await api.post("/admin/auth/forgot-password", payload, {});

    dispatch(showSuccess(res?.data?.message));

    return res;
  } catch (error) {
    return dispatch(handelCatch(error));
  }
};

export const updateforgotpassword = (payload) => async (dispatch) => {
  try {
    const { token, ...data } = payload;
    const res = await api.post(`/admin/auth/reset-password/${token}`, data, {});
    dispatch(showSuccess(res?.data?.message));
    return res;
  } catch (error) {
    return dispatch(handelCatch(error));
  }
};

export const handelResponse = (res) => async () => {
  let returnValue = null;
  const status = res?.status;
  switch (status) {
    case 200:
      returnValue = res;
      break;
    case 201:
      returnValue = res;
      break;
    case 204:
      returnValue = {
        status: status,
        data: [],
      };
      break;
    case 400:
      console.log(res);
      break;
    default:
      throwError({ message: "Something went wrong!" });
      returnValue = {
        status: status,
        message: "Something went wrong!",
      };
      break;
  }
  return returnValue;
};
export const handelCatch = (error) => async (dispatch) => {
  let status = error?.response?.status;
  let messsage = error?.response?.data?.message || "Something went wrong!";
  let returnCatch = {
    status: status,
    messsage: messsage,
  };
  if (status === 401) {
    dispatch(throwError("Session is expired"));
    dispatch(setAuthData(encrypt({ time: new Date().toLocaleString() })));
    dispatch(resetAllState(null));
    localStorage.removeItem("authData");
    localStorage.clear();
  } else if (status === 403) {
    messsage =
      error?.response?.data?.message ||
      error?.response?.data ||
      "Something went wrong!";
    dispatch(
      setErrorData({
        show: true,
        message: messsage,
        type: "danger",
      })
    );
  } else if (status === 409) {
    dispatch(
      setErrorData({
        show: true,
        message: messsage,
        type: "danger",
      })
    );
  } else if (status === 404) {
    dispatch(
      setErrorData({
        show: true,
        message: messsage,
        type: "danger",
      })
    );
  } else if (status === 400) {
    messsage = error?.response?.data?.message || "Something went wrong!";
    dispatch(
      setErrorData({
        show: true,
        message: messsage,
        type: "danger",
      })
    );
  } else if (status === 500) {
    messsage = error?.response?.data?.message || "Something went wrong!";
    dispatch(
      setErrorData({
        show: true,
        message: messsage,
        type: "danger",
      })
    );
  } else if (status === 422) {
    dispatch(
      setErrorData({
        show: true,
        message: messsage,
        type: "danger",
      })
    );
  } else {
    dispatch(
      setErrorData({
        show: true,
        message: messsage,
        type: "danger",
      })
    );
  }
  return returnCatch;
};

export const showSuccess = (message) => async (dispatch) => {
  dispatch(
    setErrorData({
      show: true,
      message: message,
      type: "success",
    })
  );
};

export const throwError = (message) => async (dispatch) => {
  let newMessage = message;
  newMessage = message || "Something went wrong!";
  dispatch(
    setErrorData({
      show: true,
      message: newMessage,
      type: "danger",
    })
  );
};

export const {
  setLoading,
  clearLoading,
  setAuthData,
  setErrorData,
  resetAllState,
  toggleSidebar,
  setIsUserSide,
  setIsRightSide,
  setRightSideObj,
  setIsTopics,
  registermodel,
  setIsModalOpen,
  setIsCreateProjectselectOpen,
  setIsDeleteProjectselectOpen,
  setIsEditProjectselectOpen,
  setIsProjectselectOpen,
  setSelectedProject,
  setisSearchActive,
  setIsProjectCreate,
} = globalSlice.actions;

export default globalSlice.reducer;
