import api from '../config';

export const healthService = {
  // Welcome message
  getWelcome: async () => {
    const response = await api.get('/');
    return response.data;
  },

  // Health check
  getHealth: async () => {
    const response = await api.get('/health');
    return response.data;
  },
};
