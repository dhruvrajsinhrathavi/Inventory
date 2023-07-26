const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    descreption: {
        type: String,
        required: true,
        max: 100,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true
    },
    currStock: {
        type: Number,
        required: true,
    },
    minStock: {
        type: Number,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    otherDepartment: {
        type: Array,
        default: []
    },
    thumbnail: {
        type: String
    }
});

module.exports = mongoose.model("Product", ProductSchema);