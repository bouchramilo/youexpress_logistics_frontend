import { useState, useEffect } from 'react';
import { historiqueService } from '../api';

function Historique() {
  const [historique, setHistorique] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [colisIdFilter, setColisIdFilter] = useState('');

  const fetchHistorique = async (colisId = null) => {
    try {
      setLoading(true);
      let data;
      if (colisId) {
        data = await historiqueService.getHistoriqueByColisId(colisId);
      } else {
        data = await historiqueService.getAllHistorique();
      }
      setHistorique(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch historique: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistorique();
  }, []);

  const handleFilter = () => {
    if (colisIdFilter) {
      fetchHistorique(colisIdFilter);
    } else {
      fetchHistorique();
    }
  };

  const handleReset = () => {
    setColisIdFilter('');
    fetchHistorique();
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="text-xl">Loading...</div></div>;
  if (error) return <div className="flex justify-center items-center min-h-screen"><div className="text-xl text-red-500">{error}</div></div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Historique</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Filter by Colis</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Colis ID"
            value={colisIdFilter}
            onChange={(e) => setColisIdFilter(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 flex-1"
          />
          <button
            onClick={handleFilter}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Filter
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Colis ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Action</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {historique.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No historique found</td>
              </tr>
            ) : (
              historique.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{item.id}</td>
                  <td className="px-6 py-4 text-sm">{item.colis_id}</td>
                  <td className="px-6 py-4 text-sm">{item.action || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">{item.description || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">{item.date || item.created_at || 'N/A'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Historique;
