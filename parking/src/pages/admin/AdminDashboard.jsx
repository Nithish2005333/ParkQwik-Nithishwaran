import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      // Check if admin is logged in
      const isAdmin = localStorage.getItem("isAdmin");
      const adminToken = localStorage.getItem("adminToken");

      if (!isAdmin || !adminToken) {
        window.location.href = "/admin/login";
        return;
      }

      const res = await axios.get("/api/admin/messages", {
        headers: {
          'Authorization': `Bearer ${adminToken}`
        }
      });
      setContacts(res.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      if (err.response?.status === 403) {
        // Unauthorized - redirect to login
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("adminToken");
        window.location.href = "/admin/login";
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div className="p-5 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Admin - Contact Requests
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Table / Message */}
      {contacts.length === 0 ? (
        <p className="text-gray-600">No contact requests yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-50 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-center font-bold">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Contact</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-100 text-center "
                >
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.contact}</td>
                  <td className="px-4 py-2">{item.message}</td>
                  <td className="px-4 py-2">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>

  );
};

export default AdminDashboard;
