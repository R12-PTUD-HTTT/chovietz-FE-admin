import { javaAPI } from "./config";
import { SHIPPER } from "../constants/apiPath";

export const shipperApi = {
  getLstOrderShip: async (idShipper) => {
    return await javaAPI.get(
      `${SHIPPER.GET_LIST_ORDER_SHIPPING}${idShipper}`,
      null
    );
  },
};
