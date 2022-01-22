import { shipperApi } from "../api/shipperApi";

export const getLstOrderShip = async () => {
  //   let idShipper = JSON.parse(localStorage.getItem("user")).userId;
  let lstOrderShipping = await (
    await shipperApi.getLstOrderShip(1)
  ).data.orders;
  return lstOrderShipping;
};
