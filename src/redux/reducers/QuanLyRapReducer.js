import {
  SET_DANH_SACH_RAP_CHIEU,
  SET_HE_THONG_RAP_CHIEU,
} from "../actions/types/quanLyRapTypes";

const initialState = {
  heThongRapChieu: [],
  danhSachRapChieu: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP_CHIEU: {
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };
    }

    case SET_DANH_SACH_RAP_CHIEU: {
      state.danhSachRapChieu = action.danhSachRapChieu;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
