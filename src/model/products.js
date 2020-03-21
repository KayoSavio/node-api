const mongoose = require('mongoose');

const products = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    old: {
        type: Number,
        required: true,
    }
});

mongoose.model('Product',products);