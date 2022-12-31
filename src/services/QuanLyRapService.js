import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export default class QuanLyRapSevice extends baseService {
  layDanhSachHeThongRap = (maHTR) => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHTR}&maNhom=${GROUPID}`
    );
  };

  layDanhSachRapChieu = () => {
    return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  };

  layThongTinChiTietPhim = (maPhim) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };
}

export const quanLyRapService = new QuanLyRapSevice();
