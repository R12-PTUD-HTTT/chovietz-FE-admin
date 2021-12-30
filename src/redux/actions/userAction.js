import * as actionType from "../constants/user/userConstant";

export const storeUserLogin = (payload) => {
  return { type: actionType.STORE_USER_INFORMATION, payload };
};

export const storedUserLogin = (data) => {
  return (dispatch) => {
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(storeUserLogin(data));
  };
};
