import axios from 'axios';
import { store } from '../store/index';

export let axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
  params: {},
  headers: {},
});

axiosInstance.interceptors.request.use((request) => {
  let { loaderState } = store;
  let { setIsLoading, setStatus } = loaderState;
  setIsLoading(true);
  setStatus(true);
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    let { loaderState } = store;
    let { setIsLoading, setStatus } = loaderState;
    setIsLoading(false);
    setStatus(true);
    return response;
  },
  (error) => {
    let { loaderState } = store;
    let { setIsLoading, setStatus } = loaderState;
    setIsLoading(false);
    setStatus(false);
    console.log(error);
  }
);

// import axios from "axios";
// import { store } from "../store/index";

// let axiosInstance = axios.create({
//   baseURL: "",
//   params: {},
//   headers: {},
// });

// axiosInstance.interceptors.request.use((request) => {
//   let { loaderState } = store;
//   let { setIsLoading, setStatus } = loaderState;
//   setIsLoading(true);
//   setStatus(true);
//   return request;
// });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     let { loaderState } = store;
//     let { setIsLoading, setStatus } = loaderState;
//     setIsLoading(false);
//     setStatus(true);
//     return response;
//   },
//   (error) => {
//     let { loaderState } = store;
//     let { setIsLoading, setStatus } = loaderState;
//     setIsLoading(false);
//     setStatus(false);
//     console.log(error);
//   }
// );
