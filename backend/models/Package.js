const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    duration: String,
    locations: [String],
    image: String
});

module.exports = mongoose.model('Package', PackageSchema);
