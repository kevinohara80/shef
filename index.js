var request = require('request');
var protocol = require('./lib/protocol');


var Box = function(host, opts) {
  if(!opts) opts = {};
  this.host = host;
}

// get tuned information from the box
Box.prototype.getTuned = function(opts, cb) {
  cb();
}

Box.prototype.getProgramInfo = function(opts, cb) {
  cb();
}

Box.prototype.tune = function(opts, cb) {
  cb();
}

Box.prototype.key = function(key) {
  // not sure on this api yet
  var keyRef = {
    up: function() {

    },
    down: function() {

    },
    press: function() {

    }
  }
  return keyRef;
}

Box.prototype.getVersion = function(opts, cb) {
  cb();
}

Box.prototype.getOptions = function(opts, cb) {
  cb();
}

Box.prototype.getMode = function(opts, cb) {
  cb();
}

Box.prototype.getLocations = function(opts, cb) {
  cb();
}



module.exports.box = function(host, opts) {
  return new Box(host, opts);
}