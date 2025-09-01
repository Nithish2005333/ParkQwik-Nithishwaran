import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        if (res.ok) {
          setRequests(data);
        } else {
          setError(data.message || "Failed to load contact requests.");
        }
      } catch (err) {
        setError("Server error.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin - User Contact Requests</h1>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white border border-gray-300 rounded-xl p-5 shadow-md"
            >
              <p className="text-lg font-semibold text-green-700 mb-2">
                {req.name}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Contact:</span> {req.contact}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <span className="font-medium">Message:</span><br /> {req.message}
              </p>
              <p className="text-xs text-gray-500 mt-3">
                {new Date(req.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
