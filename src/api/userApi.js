import { cSharpAPI, javaAPI } from "./config";

export const fetchLogin = async (data) => {
  return await javaAPI.post("/public/signin", data);
};

export const fetchShippingForm = async (data) => {
  return await cSharpAPI.post("/shipappform", data);
};

export const getShipperInfor = async (id) => {
  return await javaAPI.get(`/shipper/${id}`);
};
