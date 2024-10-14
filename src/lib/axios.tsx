import axios from 'axios';

const authAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default authAxiosInstance;
