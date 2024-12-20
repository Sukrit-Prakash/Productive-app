import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.9:3000/api'; // Replace with your backend URL

// Create Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API endpoints
export const registerUser = async (userData) => {
  const response = await apiClient.post('/users/register', userData);
  return response.data;
};
      // const response = await axios.post('http://192.168.1.9:3000/api/users/login', {
      //   email,
      //   password,
      // });
export const loginUser = async (credentials) => {
  const response = await apiClient.post('/users/login', credentials);
  return response;
};

export const getUserTasks = async (userId) => {
  const response = await apiClient.get(`/tasks/${userId}`);
  return response;
};

export const createTask = async (taskData) => {
  const response = await apiClient.post('/tasks', taskData);
  return response.data;
};

export const updateTask = async (taskId, updatedData) => {
  const response = await apiClient.put(`/tasks/${taskId}`, updatedData);
  return response.data;
};

export default apiClient;
