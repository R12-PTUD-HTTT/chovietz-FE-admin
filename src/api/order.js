import { javaAPI } from "./config";
import { cSharpAPI } from "./config";

export const addNewOrder = async (data) => {
  return await cSharpAPI.post("/order", data);
};

export const getOrdersShopByType = async ({
  id,
  page = 0,
  size,
  typeOrder,
  sortBy = "created_date",
}) => {
  return await javaAPI.get(
    `/public/order/shop/${id}?page=${page}&size=${size}&sortBy=${sortBy}&typeOrder=${typeOrder}`
  );
};
export const getOrdersShipperByType = async ({
  id,
  page = 0,
  size,
  typeOrder,
  sortBy = "created_date",
}) => {
  return await javaAPI.get(
    `/public/order/shipper/${id}?page=${page}&size=${size}&sortBy=${sortBy}&typeOrder=${typeOrder}`
  );
};

export const getDetailOrder = async (id) => {
  return await javaAPI.get(`/public/order/${id}`);
};
export const updateOrderStatus = async (id, data) => {
  return await javaAPI.put(`/public/order/${id}/return`, data);
};
export const requestReturnOrder = async (data) => {
  return await javaAPI.post(`/return-order`, data);
};
export const addNewOrderForReturnOrder = async (id, data) => {
  return await javaAPI.put(`/return-order/${id}/new-order`, data);
};
export const updateOrderAfterReturn = async (id, data) => {
  return await javaAPI.put(`/public/order/${id}/return`, data);
};

export const getReturnOrder = async (id) => {
  return await javaAPI.get(`/return-order/${id}`);
};
export const updateShipperOfOrder = async (id, data) => {
  return await javaAPI.get(`/public/order/${id}/shipper`, data);
};
