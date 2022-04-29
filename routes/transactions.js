const router = require('express').Router();
const Transaction = require('../models/transactionModel');
const { verify } = require('./verifyToken');

// CREATE TRANSACTION
router.post('/checkout', verify, async (req, res) => {
  const newTransaction = new Transaction(req.body);
  if(req.user) {
    try {
      const savedTransaction = await newTransaction.save();
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