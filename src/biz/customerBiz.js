import { customerApi } from "../api/customerApi";

export const getLstOrder = async () => {
  //   let idShipper = JSON.parse(localStorage.getItem("user")).userId;
  let lstOrderShipping = await (await customerApi.getLstOrder(0)).data.orders;
  return lstOrderShipping;
};
