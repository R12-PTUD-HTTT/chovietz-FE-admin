import { javaAPI } from "./config";

export const getShipperByWorkArea = async ({ city, district, ward }) => {
  return await javaAPI.get(
    `/public/shipper?work_city=${city}&work_district=${district}&work_ward=${ward}`
  );
};
export const getShipperInfor = async (id) => {
  return await javaAPI.get(`/public/shipper/${id}`);
};
