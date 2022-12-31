import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import SliderReducer from "./reducers/SliderReducer";
import QuanLyPhimReducer from "./reducers/QuanLyPhimReducer";
import QuanLyRapReducer from "./reducers/QuanLyRapReducer";
import QuanLyNguoiDungReducer from "./reducers/QuanLyNguoiDungReducer";
const rootReducer = combineReducers({
  SliderReducer: SliderReducer,
  QuanLyPhimReducer: QuanLyPhimReducer,
  QuanLyRapReducer: QuanLyRapReducer,
  QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;
