const router = require('express').Router();
const Transaction = require('../models/transactionModel');
const User = require('../models/userModel');
const { verify } = require('./verifyToken');
//install UUID

// CREATE TRANSACTION
router.post('/checkout', verify, async (req, res) => {
  const { user, total, cart, completed } = req.body;

  if(req.user) {
    try {
      const foundUser = await User.findOne({ _id: user });

      const newTransaction = new Transaction({
        user: foundUser._id,
        cart: cart,
        total: total,
        completed: completed
      })
      const savedTransaction = await newTransaction.save();

      foundUser.transactionHistory.push(savedTransaction.id);

      await foundUser.save();

      return res.status(200).json({ message: 'Transaction created successfully', payload: savedTransaction });
    }
    catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

module.exports = router;