import { fetchLogin } from "../../api/userApi";
import * as actionType from "../constants/user/userConstant";

export const storeUserLogin = (payload) => {
  return { type: actionType.STORE_USER_INFORMATION, payload };
};
export const reloadUserLogin = (payload) => {
  return { type: actionType.RELOAD_USER_INFORMATION, payload };
};
export const removeState = () => {
  return { type: actionType.REMOVE_USER_INFORMATION };
};

export const fetchUserLogin = (data, onSuccess, onFail) => {
  return async (dispatch) => {
    try {
      const response = await fetchLogin(data);
      if (response.status === 200) {
        dispatch(storeUserLogin(response.data));
        onSuccess && onSuccess(response.data);
      } else {
        onFail && onFail("Tên hoặc mật khẩu không đúng");
      }
    } catch (err) {
      onFail && onFail("Có lỗi trong quá trình tải, vui lòng thử lại sau!");
    }
  };
};
export const reloadUserStore = () => {
  return (dispatch) => {
    const data = JSON.parse(localStorage.getItem("user"));
    dispatch(reloadUserLogin(data));
  };
};
export const removeStoredUser = () => {
  return (dispatch) => {
    localStorage.removeItem("user");
    dispatch(removeState());
  };
};
