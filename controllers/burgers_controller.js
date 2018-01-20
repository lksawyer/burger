var express = require("express");

var burger = require("../models/burger.js");

module.exports = function(app) {

	app.get('/', function (req, res) {

  		burger.selectAll(function(data) {

			var hbsObject = {
      			burgers: data
    		};
    		console.log(hbsObject);
		    res.render("index", hbsObject);
		 });

	});

	app.get('/api/burgers', function (req, res) {
  		
  		burger.selectAll(function(data) {
			res.json(data);
		});
	});

	//Create Burger

	app.post('/api/create', function (req, res) {

		var burgerName = req.body.burger;
  		
  		burger.insertOne(burgerName, function() {
			res.redirect('/');
		});
	});

	//Update buger
	app.put('/api/update/:id', function (req, res) {

		var id = req.body.id; 
  		
  		burger.updateOne(id, function() {
			res.redirect('/');
		});
	});

	

};