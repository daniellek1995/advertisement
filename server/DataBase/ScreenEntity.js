const mongoose = require('mongoose');

const ScreenSchema = new mongoose.Schema({
    _id: Number,
    lastConnection: Date
});

// Create model from the schema
const ScreenModel = mongoose.model('Screens', ScreenSchema);

module.exports = {
    ScreenSchema,
    ScreenModel
};