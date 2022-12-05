const express = require("express");
const helper = require("./functions/helper");
const app = express();

// Importing Endpoints
const getProductInfoById = require("./endpoints/getProductInfoById");

// API Endpoints
app.use("/getProductInfoById", getProductInfoById);

// Error handler
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	console.error(err.message, err.stack);
	res.status(statusCode).json({ message: err.message });
	return;
});

// API Port
app.listen(3000);
