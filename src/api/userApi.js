import { javaAPI } from "./config";

export const fetchLogin = async (data) => {
  return await javaAPI.post("/public/signin", data);
};
