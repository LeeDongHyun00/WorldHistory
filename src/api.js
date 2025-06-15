import axios from 'axios';
// 실행 npx json-server --watch db.json --port 3000
const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

// 모든 시대 정보 가져오기
export const getEras = async () => {
  try {
    const response = await api.get('/eras');
    return response.data;
  } catch (error) {
    console.error('Error fetching eras:', error);
    throw error;
  }
};

// 특정 시대 정보 가져오기
export const getEraById = async (id) => {
  try {
    const response = await api.get(`/eras?id=${id}`);
    return response.data[0];
  } catch (error) {
    console.error(`Error fetching era ${id}:`, error);
    throw error;
  }
};

export default api;