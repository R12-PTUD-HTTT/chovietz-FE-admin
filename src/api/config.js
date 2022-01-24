import axios from "axios";
export const javaAPI = axios.create({
  baseURL: process.env.JAVA_BE_API || "http://localhost:8080/api/",
  mode: "no-cors",
  cache: "no-cache",
  credentials: "same-origin",
  redirect: "follow",
  referrer: "no-referrer",
  header: { "Content-Type": "application/json" },
});

javaAPI.interceptors.request.use((config) => {
  const access_token = getToken();
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});
javaAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response?.data;
  }
);

export const cSharpAPI = axios.create({
  baseURL: process.env.CSHARP_BE_API || "https://localhost:44336/api/",
  mode: "no-cors",
  cache: "no-cache",
  credentials: "same-origin",
  redirect: "follow",
  referrer: "no-referrer",
  header: {
    "Content-Type": "application/json",
  },
});

cSharpAPI.interceptors.request.use((config) => {
  const access_token = getToken();
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});

cSharpAPI.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response?.data;
  }
);

export const getToken = () => {
  const user = localStorage.getItem("user");
  const token = JSON.parse(user)?.token;
  if (token) {
    return token;
  }
  return null;
};
