import axios from 'axios';

const authAxiosInstance = axios.create({
  baseURL: 'https://fe-project-cowokers.vercel.app/8-6',
});

export default authAxiosInstance;
