import axios from "axios";
import queryString from "query-string";

// const baseURL = "http://localhost:8080/ecom/";
// const baseURL = "http://10.200.9.158:8080/ecom/";
const baseURL = "http://10.200.8.13:8080/ecom/";

const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

publicClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

// publicClient.interceptors.response.use(
//   (response) => {
//     if (response && response.data) return response.data;
//     return response;
//   },
//   (err) => {
//     throw err.response.data;
//   }
// );

publicClient.interceptors.response.use(
  (response) => {
    // Return response.data directly
    return response?.data || response;
  },
  (err) => {
    // Handle errors properly
    return Promise.reject(err?.response?.data || err.message);
  }
);

export default publicClient;
