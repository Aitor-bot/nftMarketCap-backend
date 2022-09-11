const mongoose = require("mongoose");

const collectionModel = new mongoose.Schema({
    Symbol: {
        type: String,
        length: 100,
        required: true
    },
    Name: {
        type: String,
        length: 100,
        required: false
    },
    Description: {
        type: String,
        length: 500,
        required: false
    },
    Image: {
        type: String,
        length: 200,
        required: false
    },
    Website: {
        type: String,
        length: 200,
        required: false
    },
    Twitter: {
        type: String,
        length: 100,
        required: false
    },
    Discord: {
        type: String,
        length: 200,
        required: false
    },
    CreatedAt: {
        type: String,
        length: 200,
        required: false
    },
    UpdatedAt: {
        type: String,
        length: 200,
        required: false
    }
}, { collection: 'Collections' });

module.exports = mongoose.model('Collections', collectionModel);