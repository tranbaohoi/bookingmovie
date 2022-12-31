import axios from "axios";
import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_LIST_FILMS } from "./types/quanlyPhimTypes";

export const getListFilmsActions = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim();
      dispatch({
        type: SET_LIST_FILMS,
        arrFilm: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
