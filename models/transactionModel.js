const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
	cart: [{ type: mongoose.Schema.ObjectId, ref: "product" }],
	total: { type: String, required: true },
	user: { type: mongoose.Schema.ObjectId, ref: "user" },
	completed: { type: Boolean }
}, { timestamps: true })

module.exports = mongoose.model("transaction", TransactionSchema);