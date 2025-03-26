const User = require("../models/User"); 

const registerIndividual = async (req, res) => {
    try {
        
        const { email, phone, password, confirmPassword } = req.body;

        // Validate that all required fields are provided
        if (!email || !phone || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Validate that password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match." });
        }

        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Create a new user object with the provided data
        const newUser = new User({ email, phone, password });

        // Save the new user to the database
        await newUser.save();

        // Send a success response
        res.status(201).json({ message: "Registration successful!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};



const registerAgent = async (req, res) => {
    try {
        // Extract fields from the request body
        const { businessName, email, phone, address, city, state, zip, licenseNumber, password, confirmPassword } = req.body;

        // Validate that all fields are provided
        if (!businessName || !email || !phone || !address || !city || !state || !zip || !licenseNumber || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Validate that password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match." });
        }

        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Agent with this email already exists." });
        }

        // Create a new agent object
        const newAgent = new User({
            businessName,
            email,
            phone,
            address,
            city,
            state,
            zip,
            licenseNumber,
            password, // Store raw password (not recommended in production)
        });

        // Save the agent to the database
        await newAgent.save();

        // Respond with success message
        res.status(201).json({ message: "Agent registered successfully!" });
    } catch (error) {
        console.error("Error during agent registration:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};


const registerBusiness = async (req, res) => {
    try {
        // Extract fields from the request body
        const { businessName, email, phone, address, city, state, zip, licenseNumber, password, confirmPassword } = req.body;

        // Validate that all fields are provided
        if (!businessName || !email || !phone || !address || !city || !state || !zip || !licenseNumber || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Validate that password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match." });
        }

        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "business with this email already exists." });
        }

        // Create a new agent object
        const newBusiness = new User({
            businessName,
            email,
            phone,
            address,
            city,
            state,
            zip,
            licenseNumber,
            password, // Store raw password (not recommended in production)
        });
        await newBusiness.save();

        // Respond with success message
        res.status(201).json({ message: "Business registered successfully!" });
    } catch (error) {
        console.error("Error during business registration:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

//  Export all functions
module.exports = { registerIndividual, registerAgent, registerBusiness };