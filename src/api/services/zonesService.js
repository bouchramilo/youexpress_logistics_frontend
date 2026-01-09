import api from '../config';

export const zonesService = {
  // Create a new zone
  createZone: async (zoneData) => {
    const response = await api.post('/zones/', zoneData);
    return response.data;
  },

  // Get all zones
  getAllZones: async () => {
    const response = await api.get('/zones/');
    return response.data;
  },

  // Get zone by ID
  getZoneById: async (zoneId) => {
    const response = await api.get(`/zones/${zoneId}`);
    return response.data;
  },

  // Update zone
  updateZone: async (zoneId, zoneData) => {
    const response = await api.put(`/zones/${zoneId}`, zoneData);
    return response.data;
  },

  // Delete zone
  deleteZone: async (zoneId) => {
    const response = await api.delete(`/zones/${zoneId}`);
    return response.data;
  },
};
