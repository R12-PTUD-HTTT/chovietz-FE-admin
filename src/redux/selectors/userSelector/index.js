import { createSelector } from "reselect";

const user = (state) => state.user;

export const selectIsLogin = createSelector(user, (state) => state.isLogin);
export const selectRole = createSelector(user, (state) => state.role);
export const selectUserId = createSelector(user, (state) => state.userId);
