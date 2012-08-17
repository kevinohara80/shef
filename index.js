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
Box.prototype.getTuned = function(cb) {
  this._get('/tv/getTuned', null, cb);
}

Box.prototype.getProgInfo = function(opts, cb) {
  var reqOpts ={};
  console.log(typeof opts);
  if(typeof opts === 'string' || typeof opts === 'number') {
    reqOpts.major = opts;
  } else {
    reqOpts = opts;
  }
  this._get('/tv/getProgInfo', reqOpts, cb);
}

Box.prototype.tune = function(chan, cb) {
  var reqOpts ={};
  console.log(typeof opts);
  if(typeof opts === 'string' || typeof opts === 'number') {
    reqOpts.major = opts;
  } else {
    reqOpts = opts;
  }
  this._get('/tv/tune', reqOpts, cb);
}

Box.prototype.key = function(key) {
  var keyRef = {
    up: function(cb) {
      this._get('/remote/processKey', { key: key, hold: 'keyUp'}, cb);
      return this;
    }.bind(this),
    down: function(cb) {
      this._get('/remote/processKey', { key: key, hold: 'keyDown'}, cb);
      return this;
    }.bind(this),
    press: function(cb) {
      this._get('/remote/processKey', { key: key, hold: 'keyPress'}, cb);
      return this;
    }.bind(this)
  }
  return keyRef;
}

Box.prototype.getVersion = function(cb) {
  this._get('/info/getVersion', null, cb);
}

Box.prototype.getOptions = function(cb) {
  this._get('/info/getOptions', null, cb);
}

Box.prototype.getMode = function(cb) {
  this._get('/info/mode', null, cb);
}

Box.prototype.getLocations = function(cb) {
  this._get('/info/getLocations', null, cb);
}

// utility request function

Box.prototype._get = function(url, opts, cb) {
  if(!cb) cb = function() {}
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

module.exports.version = '0.0.1';