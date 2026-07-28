import axios from 'axios';

// ⚠️ TROCAR pelo IP da sua máquina ao testar no celular!
// Descobrir IP: ipconfig (Windows) ou ifconfig (Mac/Linux)
// Emulador Android: usar http://10.0.2.2:3000/api
const API_URL = 'http://192.168.1.100:3000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default api;
