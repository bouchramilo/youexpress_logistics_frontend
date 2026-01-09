import { useState, useEffect } from 'react';
import { destinatairesService } from '../api';

function Destinataires() {
  const [destinataires, setDestinataires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    adresse: ''
  });

  const fetchDestinataires = async () => {
    try {
      setLoading(true);
      const data = await destinatairesService.getAllDestinataires();
      setDestinataires(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch destinataires: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinataires();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await destinatairesService.createDestinataire(formData);
      setFormData({ nom: '', prenom: '', telephone: '', adresse: '' });
      setShowForm(false);
      fetchDestinataires();
      alert('Destinataire created successfully!');
    } catch (err) {
      alert('Failed to create destinataire: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this destinataire?')) return;
    try {
      await destinatairesService.deleteDestinataire(id);
      fetchDestinataires();
      alert('Destinataire deleted successfully!');
    } catch (err) {
      alert('Failed to delete destinataire: ' + err.message);
    }
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="text-xl">Loading...</div></div>;
  if (error) return <div className="flex justify-center items-center min-h-screen"><div className="text-xl text-red-500">{error}</div></div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Destinataires Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? 'Cancel' : 'Add Destinataire'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">New Destinataire</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nom"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Prenom"
              value={formData.prenom}
              onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2"
              required
            />
            <input
              type="tel"
              placeholder="Telephone"
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Adresse"
              value={formData.adresse}
              onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2"
            />
            <button type="submit" className="md:col-span-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Create Destinataire
            </button>
          </form>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Prenom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Telephone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Adresse</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {destinataires.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">No destinataires found</td>
              </tr>
            ) : (
              destinataires.map((destinataire) => (
                <tr key={destinataire.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{destinataire.id}</td>
                  <td className="px-6 py-4 text-sm">{destinataire.nom}</td>
                  <td className="px-6 py-4 text-sm">{destinataire.prenom}</td>
                  <td className="px-6 py-4 text-sm">{destinataire.telephone || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">{destinataire.adresse || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleDelete(destinataire.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
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

export default Destinataires;
