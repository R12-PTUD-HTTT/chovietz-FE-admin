import * as actionType from "../../constants/user/userConstant";
const initState = {
  isLogin: false,
  token: "",
  role: "user",
  userId: "",
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.STORE_USER_INFORMATION:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
        role: action.payload.userRole,
        userId: action.payload.userId,
      };
    case actionType.RELOAD_USER_INFORMATION:
      return {
        ...state,
        isLogin: !!action.payload?.token,
        token: action.payload?.token || "",
        role: action.payload?.userRole || "",
        userId: action.payload?.userId || "",
      };
    case actionType.REMOVE_USER_INFORMATION:
      return { ...initState };
    default:
      return { ...state };
  }
};
