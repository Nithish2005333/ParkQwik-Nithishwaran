const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
// Contact model schema - defined inline since we removed the backend directory
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://Nithish205333:Nithish1@cluster0.pujezf.mongodb.net/parking-app?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Store admin sessions (in production, use Redis or database)
const adminSessions = new Set();

// API Routes
// Admin Login Route
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Generate a simple session token
    const sessionToken = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    adminSessions.add(sessionToken);
    
    return res.status(200).json({ 
      message: "Login successful",
      sessionToken: sessionToken
    });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

// Protected Admin Messages Route
app.get("/api/admin/messages", async (req, res) => {
  const sessionToken = req.headers.authorization?.replace('Bearer ', '');
  
  if (!sessionToken || !adminSessions.has(sessionToken)) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});

// Admin Logout Route
app.post("/api/admin/logout", (req, res) => {
  const sessionToken = req.headers.authorization?.replace('Bearer ', '');
  
  if (sessionToken && adminSessions.has(sessionToken)) {
    adminSessions.delete(sessionToken);
    return res.status(200).json({ message: "Logout successful" });
  }
  
  return res.status(400).json({ message: "Invalid session" });
});

// Public Contact Form POST
app.post("/api/contact", async (req, res) => {
  const { name, contact, message } = req.body;

  if (!name || !contact || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newContact = new Contact({ name, contact, message });
    await newContact.save();
    res.status(201).json({ message: "Contact saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "parking/dist")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "parking/dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend will be served from: ${path.join(__dirname, "parking/dist")}`);
});
