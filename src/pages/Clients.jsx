import { useState, useEffect } from 'react';
import { clientsService } from '../api';

function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: ''
  });

  const fetchClients = async () => {
    try {
      setLoading(true);
      const data = await clientsService.getAllClients();
      setClients(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch clients: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await clientsService.createClient(formData);
      setFormData({ nom: '', prenom: '', email: '', telephone: '', adresse: '', ville: '' });
      setShowForm(false);
      fetchClients();
      alert('Client created successfully!');
    } catch (err) {
      alert('Failed to create client: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this client?')) return;
    try {
      await clientsService.deleteClient(id);
      fetchClients();
      alert('Client deleted successfully!');
    } catch (err) {
      alert('Failed to delete client: ' + err.message);
    }
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="text-xl">Loading...</div></div>;
  if (error) return <div className="flex justify-center items-center min-h-screen"><div className="text-xl text-red-500">{error}</div></div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Clients Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? 'Cancel' : 'Add Client'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">New Client</h2>
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
              type="tel"
              placeholder="Telephone"
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Adresse"
              value={formData.adresse}
              onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Ville"
              value={formData.ville}
              onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2"
              required
            />
            <button type="submit" className="md:col-span-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Create Client
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Telephone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Adresse</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Ville</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clients.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center text-gray-500">No clients found</td>
              </tr>
            ) : (
              clients.map((client) => (
                <tr key={client.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{client.id}</td>
                  <td className="px-6 py-4 text-sm">{client.nom}</td>
                  <td className="px-6 py-4 text-sm">{client.prenom}</td>
                  <td className="px-6 py-4 text-sm">{client.email}</td>
                  <td className="px-6 py-4 text-sm">{client.telephone || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">{client.adresse || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">{client.ville || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleDelete(client.id)}
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

export default Clients;
