import { SET_PAGE_HEADER } from "../constants/page/pageConstant";

export const setPageHeder = (pageName) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE_HEADER,
      payload: pageName,
    });
  };
};
