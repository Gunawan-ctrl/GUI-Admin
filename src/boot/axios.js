import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: parseInt(process.env.VUE_APP_TIMEOUT) || 5000,
});

export default instance;

// Handle axios, token, and response authorization 401

// import axios from "axios";
// import router from "@/router";


// const axiosInstance = axios.create({
//   baseURL: process.env.VUE_APP_BASE_URL,
//   timeout: 5000,
// });


// axiosInstance.interceptors.request.use(
//   (config) => {
//     config.headers["Content-Type"] = "application/json";
//     const dataUser = JSON.parse(localStorage?.getItem("dataUser"));
//     if (dataUser) {
//       config.headers["Authorization"] = dataUser.token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem("dataUser");
//       alert("session expired");
//       router.push({ name: "login" });
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;