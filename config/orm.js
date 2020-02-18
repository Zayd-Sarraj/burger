// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
      var query = "SELECT * FROM burgers";
      connection.query(query, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(burgerName) {
      var query = "INSERT INTO burgers (burger_name) VALUES (?) ";
  
      console.log(query);
  
      connection.query(query, burgerName, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(id) {
      var query = "UPDATE burgers";
      query += " SET devoured = true";
      query += " WHERE id = ?";
  
      console.log(query);
  
      connection.query(query, id, function(
        err,
        result
      ) {
        if (err) throw err;
        console.log(result);
      });
    }
  };
  
  module.exports = orm;