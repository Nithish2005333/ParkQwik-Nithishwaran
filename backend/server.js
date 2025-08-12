const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Contact = require("./models/Contact");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Simple in-memory session for demonstration
let isAdminLoggedIn = false;

// Admin Login Route
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    isAdminLoggedIn = true;
    return res.status(200).json({ message: "Login successful" });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

// Protected Admin Messages Route
app.get("/api/admin/messages", async (req, res) => {
  if (!isAdminLoggedIn) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
