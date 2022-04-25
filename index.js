const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const authRoute = require('./routes/auth');
// const usersRoute = require('./routes/users');
// const productsRoute = require('./routes/products');
// const transactionsRoute = require('./routes/transactions');

dotenv.config();

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => {
		console.log(err)
	});

app.use(express.json());
// app.use('/api/auth', authRoute);
// app.use('/api/users', usersRoute);
// app.use('/api/products', productsRoute);
// app.use('/api/transactions', transactionsRoute);

app.listen(3001, () => {
	console.log('Server is running...')
})