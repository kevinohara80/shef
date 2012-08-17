var request  = require('request');
var protocol = require('./lib/protocol');
var url      = require('url');


var Box = function(opts) {
  if(!opts) opts = {};

  if(typeof opts === 'string') {
    this.host = opts;
  } else {
    this.host = opts.host;
    this.port = opts.port || 8080;
  }

  if(this.host.indexOf(':') !== -1) {
    var tokens = this.host.split(':');
    this.host = tokens[0];
    this.port = parseInt(tokens[1]);
  }

  // default to 8080
  if(!this.port) this.port = 8080;

}

// get tuned information from the box
Box.prototype.getTuned = function(opts, cb) {

}

Box.prototype.getProgramInfo = function(chan, cb) {
  cb();
}

Box.prototype.tune = function(chan, cb) {
  this._get('/tv/tune', { major: chan }, cb);
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
  this._get('/info/getOptions', null, cb);
}

Box.prototype.getMode = function(opts, cb) {
  cb();
}

Box.prototype.getLocations = function(opts, cb) {
  cb();
}

// utility request function

Box.prototype._get = function(url, opts, cb) {
  var base = 'http://' + this.host + ':' + this.port;
  var reqOpts = {};
  if(opts) reqOpts.qs = opts;
  request.get(base + url, reqOpts, function(err, res, body) {
    if(err) return cb(err, JSON.parse(body));
    else cb(null, JSON.parse(body));
  });
}



module.exports.box = function(opts) {
  return new Box(opts);
}