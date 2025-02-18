import { api } from "@/services/api";
import { handelCatch, showSuccess } from "../globalSlice";

export const handleUploadImage = (payload) => async (dispatch) => {
    try {
      const res = await api.post("/imageUploder", payload, {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      });
      if (res?.status === 200) {
        dispatch(showSuccess(res?.data?.message));
      }
      return res;
    } catch (error) {
      return dispatch(handelCatch(error));
    }
  };