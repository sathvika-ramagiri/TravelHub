const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    businessName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    businessLicense: { type: String }, // Optional field
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Business", businessSchema);
