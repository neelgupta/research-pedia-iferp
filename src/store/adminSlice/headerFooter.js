import { api } from "@/services/api";
import { clearLoading, handelCatch, setLoading } from "../globalSlice";

export const handleGetHeaderFooter = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.get(`/admin/hfCode`, {});
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};

export const handleAddOrUpdateHeaderFooter = (payload) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await api.post(`/admin/hfCode`, payload, {});
    dispatch(clearLoading());
    return res;
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(clearLoading());
  }
};
