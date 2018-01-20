//Imports MySQL connection
var connection = require("../config/connection.js");

//ORM object
var orm = {

	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	insertOne: function(burgerName, cb) {
		var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "');";

		console.log('query string' + queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// An example of objColVals would be {name: panther, sleepy: true}
	updateOne: function(id, cb) {
		console.log(id);
		var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?;"; 

		console.log(queryString);
		connection.query(queryString, id, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

};

//Exports ORM
module.exports = orm;