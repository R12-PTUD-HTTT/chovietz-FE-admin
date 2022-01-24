import { javaAPI } from "./config";

export const getShipperByWorkArea = async ({ city, district, ward }) => {
  return await javaAPI.get(
    `/shipper?work_city=${city}&work_district=${district}&work_ward=${ward}`
  );
};
