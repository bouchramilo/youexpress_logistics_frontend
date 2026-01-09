import api from '../config';

export const clientsService = {
  // Create a new client
  createClient: async (clientData) => {
    const response = await api.post('/clients/', clientData);
    return response.data;
  },

  // Get all clients
  getAllClients: async () => {
    const response = await api.get('/clients/');
    return response.data;
  },

  // Get client by ID
  getClientById: async (clientId) => {
    const response = await api.get(`/clients/${clientId}`);
    return response.data;
  },

  // Update client
  updateClient: async (clientId, clientData) => {
    const response = await api.put(`/clients/${clientId}`, clientData);
    return response.data;
  },

  // Delete client
  deleteClient: async (clientId) => {
    const response = await api.delete(`/clients/${clientId}`);
    return response.data;
  },
};
