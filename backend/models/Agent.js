const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  licenseNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // For production, consider hashing this
});

module.exports = mongoose.model("Agent", AgentSchema);