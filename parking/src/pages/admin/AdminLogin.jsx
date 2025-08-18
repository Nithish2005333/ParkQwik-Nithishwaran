import React, { useState } from "react";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            setMessage(data.message);

            if (data.success) {
                localStorage.setItem("isAdmin", "true");
                window.location.href = "/admin"; // Redirect to admin dashboard
            }
        } catch (error) {
            setMessage("Error connecting to server");
        }
    };

    return (
        <div style={{ maxWidth: "300px", margin: "auto", padding: "20px" }}>
            <h2>Admin Login</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
