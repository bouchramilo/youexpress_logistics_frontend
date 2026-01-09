import api from '../config';

export const livreursService = {
  // Create a new livreur
  createLivreur: async (livreurData) => {
    const response = await api.post('/livreurs/', livreurData);
    return response.data;
  },

  // Get all livreurs
  getAllLivreurs: async () => {
    const response = await api.get('/livreurs/');
    return response.data;
  },

  // Get livreur by ID
  getLivreurById: async (livreurId) => {
    const response = await api.get(`/livreurs/${livreurId}`);
    return response.data;
  },

  // Update livreur
  updateLivreur: async (livreurId, livreurData) => {
    const response = await api.put(`/livreurs/${livreurId}`, livreurData);
    return response.data;
  },

  // Delete livreur
  deleteLivreur: async (livreurId) => {
    const response = await api.delete(`/livreurs/${livreurId}`);
    return response.data;
  },
};
