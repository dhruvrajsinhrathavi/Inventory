const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
    },
    borrowedItems: {
        type: Array,
        default: [],
    }
})