// Import ORM
const orm = require("../config/orm.js");

const burger = {
  findAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insert: function(burgerName, cb) {
    orm.insertOne(burgerName, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.updateOne(id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;
