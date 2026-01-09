import api from '../config';

export const colisService = {
  // Create a new colis
  createColis: async (colisData) => {
    const response = await api.post('/colis/', colisData);
    return response.data;
  },

  // Get all colis (with optional filters)
  getAllColis: async (params = {}) => {
    const response = await api.get('/colis/', { params });
    return response.data;
  },

  // Get colis by ID
  getColisById: async (colisId) => {
    const response = await api.get(`/colis/${colisId}`);
    return response.data;
  },

  // Update colis (PATCH)
  patchColis: async (colisId, colisData) => {
    const response = await api.patch(`/colis/${colisId}`, colisData);
    return response.data;
  },

  // Update colis (PUT)
  updateColis: async (colisId, colisData) => {
    const response = await api.put(`/colis/${colisId}`, colisData);
    return response.data;
  },

  // Assign livreur to colis
  assignLivreur: async (colisId, livreurData) => {
    const response = await api.patch(`/colis/${colisId}/assign`, livreurData);
    return response.data;
  },
};
