var test = require("tap").test
var shef = require('../');

test('create a box', function(t) {
  var box = shef.box('192.168.0.102');
  t.ok(box);
  t.end();
});

test('should default port to 8080', function(t) {
  var box = shef.box('192.168.0.102');
  var box2 = shef.box({
    host: '192.168.2.3'
  });
  t.equal(box.port, 8080);
  t.equal(box2.port, 8080);
  t.end();
});

test('should set the port with string', function(t) {
  var box = shef.box('192.168.0.102:9876');
  t.equal(box.port, 9876);
  t.end();
});

test('should set the port with an object', function(t) {
  var box = shef.box({
    host: '192.168.0.102',
    port: 9876
  });
  t.equal(box.port, 9876);
  t.end();
});