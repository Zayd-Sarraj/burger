// Require express
const express = require("express");

// Set Router
const router = express.Router();

// Import the model 
var burger = require("../models/burger.js");

// Routes
router.get("/", function(req, res) {
  burger.findAll(function(data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
  var burgerName = req.body.name
  
    burger.insert(burgerName, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id;
  burger.update(id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes
module.exports = router;
