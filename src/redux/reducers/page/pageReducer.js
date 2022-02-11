import { SET_PAGE_HEADER } from "../../constants/page/pageConstant";

export const pageReducer = (state = { pageName: "" }, action) => {
  switch (action.type) {
    case SET_PAGE_HEADER:
      return { ...state, pageName: action.payload };

    default:
      return { ...state };
  }
};
