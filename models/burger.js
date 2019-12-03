
var orm = require("../config/orm.js");

var burger = {
  all: function() {
    return orm.all("burgers");
  },
 
  create: function(cols, vals) {
    return orm.create("burgers", cols, vals);
  },
  update: function(objColVals, condition) {
    return orm.update("burgers", objColVals, condition);
  },
  delete: function(condition) {
    return orm.delete("burgers", condition);
  }
};


module.exports = burger;
