const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true,},
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	profilePic: { type: String, default: '' },
  transactionHistory: { type: String },
	isAdmin: { type: Boolean, default: false },
  transactionHistory: { type: mongoose.Schema.ObjectId, ref: "transaction" }
}, { timestamps: true })

module.exports = mongoose.model("User", UserSchema);