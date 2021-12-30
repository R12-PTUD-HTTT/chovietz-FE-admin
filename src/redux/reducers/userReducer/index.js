import * as actionType from "../../constants/user/userConstant";
const initState = {
  isLogin: true,
  token: "",
  role: "shop",
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.STORE_USER_INFORMATION:
      return { ...state };
    default:
      return { ...state };
  }
};
