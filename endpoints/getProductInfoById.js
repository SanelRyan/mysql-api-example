const express = require("express");
const mysql = require("mysql");
const helper = require("../functions/helper");
const config = require("../config");

function getProductInfoById(req, res) {
	// Protection towards Invalid Parameters
	if (!req.query.id || !helper.isNumeric(req.query.id)) return req.json(helper.invalidResponse(false, "Invalid Parameters."));
	const id = req.query.id;

	// Create Connection
	const connection = mysql.createConnection(config);

	// Connection Protection
	connection.connect(function (err) {
		if (err) {
			return res.json(helper.invalidResponse(false, "Something went wrong."));
		}

		// Query & Response
		connection.query(`SELECT * FROM \`products\` WHERE \`id\` = ${id}`, function (error, results, fields) {
			if (error) {
				return res.json(helper.invalidResponse(false, "Something went wrong while processing the data."));
			}

			if (!results.length || !results[0]) {
				return res.json(helper.invalidResponse(false, "Product with this ID does not exist."));
			}

			const data = results[0];

			connection.end();
			res.json(helper.validResponse(true, data));
			return;
		});
	});
}

module.exports = getProductInfoById;
