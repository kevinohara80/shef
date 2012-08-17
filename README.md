shef
====

A node.js client for your DIRECTV boxes. This is another module to further enable my ability to control my whole house with node.js.

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

## Box Setup

Your DIRECTV boxes might need a bit of setup. Here are the steps...

1. Go to `Menu->System Setup->Whole-Home->External Device`
2. Set `External Access`, `Current Program`, and `Recordings` to "Allow"

## API

### shef.box(host) || shef.box(opts)

### box.getTuned(cb)

### box.getProgInfo(chan, cb) || getProgInfo(opts, cb)

### box.tune(chan, cb) || tune(opts, cb)

### box.key(key_name).up(cb)

### box.key(key_name).down(cb)

### box.key(key_name).press(cb)

### box.getVersion(cb)

### box.getOptions(cb)

### box.getMode(cb)

### box.getLocations(cb)

## More Info

[SHEF API Guide](http://www.satinstalltraining.com/homeautomation/DTV-MD-0359-DIRECTV_SHEF_Command_Set-V1.3.C.pdf)