import { cSharpAPI, javaAPI } from "./config";

export const fetchLogin = async (data) => {
  return await javaAPI.post("/public/signin", data);
};

export const fetchShippingForm = async (data) => {
  return await cSharpAPI.post("/shipappform", data);
};

export const fetchShopApply = async (data) => {
  return await cSharpAPI.post("/shopapply", data);
};

export const fetchShopAddProduct = async (data) => {
  return await cSharpAPI.post("/product", data);
};

export const getShipperInfor = async (id) => {
  return await javaAPI.get(`/shipper/${id}`);
};

export const getShopInfor = async (id) => {
  return await javaAPI.get(`/public/shop/${id}`);
};
