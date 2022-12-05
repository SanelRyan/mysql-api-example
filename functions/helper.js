// General Functions

const responseGenerator = {
	invalidResponse: function (success, message) {
		return { success: success, message: message };
	},

	validResponse: function (success, data) {
		return { success: success, data: data };
	},
	isNumeric: function (value) {
		return /^\d+$/.test(value);
	},
};

module.exports = responseGenerator;
