const User = require("../models/User"); // Adjust based on your model

const registerIndividual = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "Registration successful!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Dummy functions for agent and business registration
const registerAgent = (req, res) => {
    res.status(200).json({ message: "Agent registered successfully." });
};

const registerBusiness = (req, res) => {
    res.status(200).json({ message: "Business registered successfully." });
};

// ✅ Export all functions
module.exports = { registerIndividual, registerAgent, registerBusiness };
