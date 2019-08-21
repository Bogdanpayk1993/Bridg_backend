const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
    {
        names: { type: String, required: true },
        status: { type: String, required: true},
        accountU: { type: Number, required: true},
        accountC: { type: Number, required: true},
    },
    { timestamps: true }
);

module.exports = mongoose.model('Game', gameSchema);