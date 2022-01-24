import { javaAPI } from "./config";

export const getOrdersByType = async ({
  page = 0,
  size,
  typeOrder,
  sortBy = "created_date",
}) => {
  return await javaAPI.get(
    `/public/order/shop/2?page=${page}&size=${size}&sortBy=${sortBy}&typeOrder=${typeOrder}`
  );
};
export const getDetailOrder = async (id) => {
  return await javaAPI.get(`/public/order/${id}`);
};
export const updateOrderStatus = async (id, status) => {
  return await javaAPI.put(`/public/order/${id}`, { status });
};
