shef
====

A node.js client for your DIRECTV boxes.

## Usage

Install...

```bash
$ npm install shef
```

Connect to one of your boxes and do some stuff...

```js
var shef = require('../');
var box1 = shef.box('192.168.0.114');

box1.tune(234, function(err, res) {
  if(!err) console.log('Tuned to channel 234');
});
```

## API

### getTuned(callback)

### getProgInfo(chan|opts, cb)

## More Info

[SHEF API Guide](http://www.satinstalltraining.com/homeautomation/DTV-MD-0359-DIRECTV_SHEF_Command_Set-V1.3.C.pdf)