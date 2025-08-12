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
      const res = await axios.get("http://localhost:5000/api/contact");
      setContacts(res.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin - Contact Requests</h1>
      {contacts.length === 0 ? (
        <p>No contact requests yet.</p>
      ) : (
        <table
          border="1"
          cellPadding="8"
          style={{
            borderCollapse: "collapse",
            width: "100%",
            backgroundColor: "#f9f9f9",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#ddd" }}>
              <th>Name</th>
              <th>Contact</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>{item.message}</td>
                <td>{new Date(item.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
