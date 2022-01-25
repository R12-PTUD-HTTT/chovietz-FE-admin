import { javaAPI } from "./config";

export const getShopApplyForm = async () => {
    return await javaAPI.get(`/admin/getshopapply`);
};
export const createShopAccount = async (id) => {
    return await javaAPI.get(`/admin/createshopacc/${id}`);
};