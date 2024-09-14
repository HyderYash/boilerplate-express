const mongoose = require('mongoose');

const SampleModel = new mongoose.Schema({
    message: { type: String, required: true }
});

module.exports = mongoose.model('Sample', SampleModel);
