//NPM Modules
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


//Create node server using express
var app = express();

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));

//Setup Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app);

app.listen(3000);
