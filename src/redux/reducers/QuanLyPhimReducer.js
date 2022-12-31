import { SET_LIST_FILMS } from "../actions/types/quanlyPhimTypes";
import { SET_CHI_TIET_PHIM } from "../actions/types/quanLyRapTypes";

const initialState = {
  arrFilm: [],
  filmDetail: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_FILMS: {
      state.arrFilm = action.arrFilm;
      return { ...state };
    }

    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    default:
      return state;
  }
};
