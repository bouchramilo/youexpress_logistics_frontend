import api from '../config';

export const gestionnairesService = {
  // Create a new gestionnaire
  createGestionnaire: async (gestionnaireData) => {
    const response = await api.post('/gestionaires/', gestionnaireData);
    return response.data;
  },

  // Get all gestionnaires
  getAllGestionnaires: async () => {
    const response = await api.get('/gestionaires/');
    return response.data;
  },

  // Get gestionnaire by ID
  getGestionnaireById: async (gestionnaireId) => {
    const response = await api.get(`/gestionaires/${gestionnaireId}`);
    return response.data;
  },

  // Update gestionnaire
  updateGestionnaire: async (gestionnaireId, gestionnaireData) => {
    const response = await api.put(`/gestionaires/${gestionnaireId}`, gestionnaireData);
    return response.data;
  },

  // Delete gestionnaire
  deleteGestionnaire: async (gestionnaireId) => {
    const response = await api.delete(`/gestionaires/${gestionnaireId}`);
    return response.data;
  },
};
