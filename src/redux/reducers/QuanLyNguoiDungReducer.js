import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION } from "../actions/types/quanLyNguoiDungTypes";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
// console.log("user", user);
const initialState = {
  userLogin: user,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }
    default:
      return { ...state };
  }
};
