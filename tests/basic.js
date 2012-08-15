var test = require("tap").test
var shef = require('../');

test('create a box', function(t) {
  var box = shef.box();
  t.ok(box);
  t.end();
});