var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;


// MIDDLEWARE BOILERPLATE CODE
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
var exphbs = require("express-handlebars");

// Handlebars boilerplate code
// Setting Handlebars as default Templating Engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// I'm thinking that I should require connection.js here
var connection = require("./config/connection");

// Route for displaying all burgers in the database
app.get("/", function (req, res) {

  connection.query("SELECT * FROM burgers", function (err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.render("index", { burgers: data });
  });
});

// Route for displaying Burger API will all burgers in the database in JSON
app.get("/burgers", function(req, res) {
  connection.query("SELECT * FROM burgers", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.json(data);
  });
});

// Create a new burger
app.post("/burgers", function(req, res) {
  console.log("request", req.body)
  connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [req.body.burgerName, req.body.devoured], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    // Send back the ID of the new todo
    res.json({ id: result.insertId, devoured: false});
    console.log({ id: result.insertId });
  });
});

// Change/Update a burger after devouring it. 
app.put("/burgers/:id", function(req, res) {
  connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    console.log("result: ", result);
    res.status(200).end();

  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
















//  WHAT I DONT KNOW

/*
 *  For now, I'm housing all my routes in server js. Not sure where to put it. 
 *  
 *  
*/