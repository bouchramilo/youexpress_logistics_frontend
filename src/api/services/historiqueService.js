import api from '../config';

export const historiqueService = {
  // Create historique entry
  createHistorique: async (historiqueData) => {
    const response = await api.post('/historique/', historiqueData);
    return response.data;
  },

  // Get all historique
  getAllHistorique: async () => {
    const response = await api.get('/historique/');
    return response.data;
  },

  // Get historique by ID
  getHistoriqueById: async (historiqueId) => {
    const response = await api.get(`/historique/${historiqueId}`);
    return response.data;
  },

  // Get historique by colis ID
  getHistoriqueByColisId: async (colisId) => {
    const response = await api.get(`/colis/${colisId}/historiques`);
    return response.data;
  },
};
