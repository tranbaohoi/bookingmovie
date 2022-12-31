import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION } from "./types/quanLyNguoiDungTypes";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      if (result.status === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
