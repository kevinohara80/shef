var shef = require('../');
var box1 = shef.box('192.168.0.114');


box1.tune(236, function(err, res) {
  if(err) {
    console.log('Err: ' + err);
  } else {
    console.log(res);
  }
});


box1.key('list').press(function(err, res) {
  if(err) {
    console.log(err);
  } else {
    console.log(res);
    box1.key('exit').press(function(err, res) {
      console.log(res);
    });
  }
});



box1.getProgInfo(234, function(err, res) {
  if(err) {
    console.log('Err: ' + err);
  } else {
    console.log(res);
  }
});

