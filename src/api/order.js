import { javaAPI } from "./config";

export const getNewOrders = async ({
  page = 0,
  size,
  sortBy = "created_date",
}) => {
  return await javaAPI.get(
    `/public/order/shop/2?page=${page}&size=${size}&sortBy=${sortBy}`
  );
};
