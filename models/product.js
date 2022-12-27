const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price : Number,
    description: String,
    CreatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('products', productSchema);