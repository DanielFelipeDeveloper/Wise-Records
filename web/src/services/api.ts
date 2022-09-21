import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_BACKEND_BASE_URL,
});

export default api;
