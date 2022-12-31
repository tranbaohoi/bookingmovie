const initialState = {
  arrImg: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SLIDER": {
      state.arrImg = action.arrImg;
      return { ...state };
    }

    default:
      return state;
  }
};
