const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

products.plugin(mongoosePaginate);
mongoose.model('Product',products);