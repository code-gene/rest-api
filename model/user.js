const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
});

module.exports = mongoose.model("user", User);