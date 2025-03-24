const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path")
const connectDB = require("./config/db");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public folder (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));  // Ensure this matches the actual filename

app.use("/api/auth", require("./routes/authRoutes")); // 🔹 Authentication Routes
app.use("/api/packages", require("./routes/packageRoutes")); // 🔹 Travel Deals Routes

// Serve frontend (Ensure index.html loads correctly)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🔹 Protected Route Example (For Agents Only)
const verifyToken = require("./middleware/authMiddleware"); // JWT Auth Middleware
app.get("/api/protected", verifyToken, (req, res) => {
    res.json({ message: "You have accessed a protected route!", user: req.user });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});
