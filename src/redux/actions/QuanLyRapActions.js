import { quanLyRapService } from "../../services/QuanLyRapService";
import {
  SET_DANH_SACH_RAP_CHIEU,
  SET_HE_THONG_RAP_CHIEU,
} from "./types/quanLyRapTypes";
import { SET_CHI_TIET_PHIM } from "./types/quanLyRapTypes";

export const layDanhSachHeThongRap = (maHTR) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap(maHTR);
      console.log("tt lich chieu ht rap", result.data.content[0]);
      // console.log('result', result.data.content);
      if (result.status === 200) {
        dispatch({
          type: SET_HE_THONG_RAP_CHIEU,
          heThongRapChieu: result.data.content[0],
        });
      }
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const layThongTinChiTietPhim = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinChiTietPhim(id);

      // console.log("result", result);
      dispatch({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const layDanhSachRapChieu = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachRapChieu();
      dispatch({
        type: SET_DANH_SACH_RAP_CHIEU,
        danhSachRapChieu: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
