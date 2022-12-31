import axios from "axios";
import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_SLIDER } from "./types/sliderType";

export const getSliderActions = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner();
      dispatch({
        type: SET_SLIDER,
        arrImg: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
