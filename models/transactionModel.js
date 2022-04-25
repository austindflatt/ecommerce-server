const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
}, { timestamps: true })

module.exports = mongoose.model("Transaction", TransactionSchema);