import axios from 'axios';
import { store } from '../store/index';

const host =
  process.env.NODE_ENV === 'production'
    ? 'https://e-commerce-api-6gdy.onrender.com'
    : 'http://localhost:4000';

export let axiosInstance = axios.create({
  baseURL: `${host}/api`,
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
