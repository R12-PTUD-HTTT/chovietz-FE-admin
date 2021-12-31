import { createSelector } from "reselect";

const page = (state) => state.page;

export const selectPageHeader = createSelector(page, (state) => state.pageName);
