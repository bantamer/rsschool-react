import axios from 'axios';

export const API_KEY = '9bffdf899ce44a1eacaf7b521ce4d47f';

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 5000,
});

export default axiosInstance;
