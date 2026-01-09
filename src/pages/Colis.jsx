import { useState, useEffect } from 'react';
import { colisService, livreursService } from '../api';

function Colis() {
  const [colis, setColis] = useState([]);
  const [livreurs, setLivreurs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({ statut: '', zone_id: '' });

  // Fetch all colis
  const fetchColis = async () => {
    try {
      setLoading(true);
      const params = {};
      if (filter.statut) params.statut = filter.statut;
      if (filter.zone_id) params.zone_id = filter.zone_id;
      
      const data = await colisService.getAllColis(params);
      setColis(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch colis: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch livreurs for assignment
  const fetchLivreurs = async () => {
    try {
      const data = await livreursService.getAllLivreurs();
      setLivreurs(data);
    } catch (err) {
      console.error('Failed to fetch livreurs:', err);
    }
  };

  useEffect(() => {
    fetchColis();
    fetchLivreurs();
  }, []);

  // Handle assign livreur
  const handleAssignLivreur = async (colisId, livreurId) => {
    try {
      await colisService.assignLivreur(colisId, { livreur_id: livreurId });
      fetchColis(); // Refresh list
      alert('Livreur assigned successfully!');
    } catch (err) {
      alert('Failed to assign livreur: ' + err.message);
    }
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  // Apply filters
  const handleApplyFilter = () => {
    fetchColis();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Colis Management</h1>

      {/* Filters */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="statut"
            placeholder="Status (e.g., en_attente, en_cours, livre)"
            value={filter.statut}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            name="zone_id"
            placeholder="Zone ID"
            value={filter.zone_id}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button
            onClick={handleApplyFilter}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Colis List */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Zone ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {colis.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No colis found
                </td>
              </tr>
            ) : (
              colis.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.description || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.statut === 'livre' ? 'bg-green-100 text-green-800' :
                      item.statut === 'en_cours' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.zone_id || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <select
                      onChange={(e) => handleAssignLivreur(item.id, e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Assign Livreur
                      </option>
                      {livreurs.map((livreur) => (
                        <option key={livreur.id} value={livreur.id}>
                          {livreur.nom || `Livreur ${livreur.id}`}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Colis;
