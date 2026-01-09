import api from '../config';

export const destinatairesService = {
  // Create a new destinataire
  createDestinataire: async (destinataireData) => {
    const response = await api.post('/destinataires/', destinataireData);
    return response.data;
  },

  // Get all destinataires
  getAllDestinataires: async () => {
    const response = await api.get('/destinataires/');
    return response.data;
  },

  // Get destinataire by ID
  getDestinataireById: async (destinataireId) => {
    const response = await api.get(`/destinataires/${destinataireId}`);
    return response.data;
  },

  // Update destinataire
  updateDestinataire: async (destinataireId, destinataireData) => {
    const response = await api.put(`/destinataires/${destinataireId}`, destinataireData);
    return response.data;
  },

  // Delete destinataire
  deleteDestinataire: async (destinataireId) => {
    const response = await api.delete(`/destinataires/${destinataireId}`);
    return response.data;
  },
};
