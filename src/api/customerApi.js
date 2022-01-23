import { javaAPI } from "./config";
import { CUSTOMER } from "../constants/apiPath";

export const customerApi = {
  getLstOrder: async (idCustomer) => {
    return await javaAPI.get(`${CUSTOMER.GET_LIST_ORDER}${idCustomer}`, null);
  },
};
