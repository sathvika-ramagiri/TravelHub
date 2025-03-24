const express = require("express");
const router = express.Router();
const { registerIndividual, registerAgent, registerBusiness } = require("../controllers/authController"); 
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, contact } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, contact });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Registration failed", error });
    }
});

// Individual Registration
router.post("/register/individual", registerIndividual);

// Agent Registration
router.post("/register/agent", registerAgent);

// Business Registration
router.post("/register/business", registerBusiness);
router.post("/login", (req, res) => {
    res.json({ message: "Login successful!" });
});
module.exports = router;
