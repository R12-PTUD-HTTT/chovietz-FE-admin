import * as actionType from "../../constants/user/userConstant";
const initState = {};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.STORE_USER_INFORMATION:
      return { ...state };
    default:
      return { ...state };
  }
};
