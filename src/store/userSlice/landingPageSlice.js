import { api } from "@/services/api";
import { clearLoading, handelCatch, setLoading } from "../globalSlice";

export const getCategoryAndTopics = () => async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await api.get("/user/catAndTopicsLandingPage", {});
  
      dispatch(clearLoading());
      return res;
    } catch (error) {
      dispatch(handelCatch(error));
      dispatch(clearLoading());
    }
  };