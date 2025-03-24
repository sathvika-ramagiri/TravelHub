const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    date: Date
});

module.exports = mongoose.model('Booking', BookingSchema);
