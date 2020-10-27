import axios from 'axios';

const api = axios.create({ baseURL: 'https://tinindo.herokuapp.com' });

export default api;