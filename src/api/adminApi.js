import { javaAPI, cSharpAPI } from "./config";

export const getShopApplyForm = async () => {
    return await javaAPI.get(`/admin/getshopapply`);
};
export const createShopAccount = async (id) => {
    return await javaAPI.get(`/admin/createshopacc/${id}`);
};
export const getShipperApplyForm = async () => {
    return await cSharpAPI.get(`/shipappform`);
};
export const createShipperAccount = async (id) => {
    return await javaAPI.get(`/admin/createshipperacc/${id}`);
};