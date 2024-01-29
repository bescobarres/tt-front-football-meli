
// components/api.ts

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://double-insight-412703.uw.r.appspot.com/',
});

export default api;