import { useState, useEffect } from 'react';
import { gestionnairesService } from '../api';

function Gestionnaires() {
  const [gestionnaires, setGestionnaires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    role: ''
  });

  const fetchGestionnaires = async () => {
    try {
      setLoading(true);
      const data = await gestionnairesService.getAllGestionnaires();
      setGestionnaires(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch gestionnaires: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGestionnaires();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await gestionnairesService.createGestionnaire(formData);
      setFormData({ nom: '', prenom: '', email: '', role: '' });
      setShowForm(false);
      fetchGestionnaires();
      alert('Gestionnaire created successfully!');
    } catch (err) {
      alert('Failed to create gestionnaire: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this gestionnaire?')) return;
    try {
      await gestionnairesService.deleteGestionnaire(id);
      fetchGestionnaires();
      alert('Gestionnaire deleted successfully!');
    } catch (err) {
      alert('Failed to delete gestionnaire: ' + err.message);
    }
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="text-xl">Loading...</div></div>;
  if (error) return <div className="flex justify-center items-center min-h-screen"><div className="text-xl text-red-500">{error}</div></div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestionnaires Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? 'Cancel' : 'Add Gestionnaire'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">New Gestionnaire</h2>
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
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2"
            />
            <button type="submit" className="md:col-span-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Create Gestionnaire
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {gestionnaires.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">No gestionnaires found</td>
              </tr>
            ) : (
              gestionnaires.map((gestionnaire) => (
                <tr key={gestionnaire.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{gestionnaire.id}</td>
                  <td className="px-6 py-4 text-sm">{gestionnaire.nom}</td>
                  <td className="px-6 py-4 text-sm">{gestionnaire.prenom}</td>
                  <td className="px-6 py-4 text-sm">{gestionnaire.email}</td>
                  <td className="px-6 py-4 text-sm">{gestionnaire.role || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleDelete(gestionnaire.id)}
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

export default Gestionnaires;
