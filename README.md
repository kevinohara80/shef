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

Create an instance of a box object to represent one of your DIRECTV boxes

### box.getTuned(cb)

Return the information about the current tuned channel on the box

### box.getProgInfo(chan, cb) || getProgInfo(opts, cb)

Get information about a program

### box.tune(chan, cb) || tune(opts, cb)

Tune your box to a certain channel

### box.key(key_name).up(cb)

Simulate a `key up` event on the remote

### box.key(key_name).down(cb)

Simulate a `key down` event on the remote

### box.key(key_name).press(cb)

Simulate a `key press` event on the remote. This is the equivalent of a key down + key up.

### box.getVersion(cb)

Get version information about the box

### box.getOptions(cb)

Get all of the command options for the box

### box.getMode(cb)

Get the current mode of the box. `0` is standby and `1` is active

### box.getLocations(cb)

Get an array of the locations for the box

## Supported Keys

`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `power`, `poweron`, `poweroff`, `format`, `pause`, `rew`, `replay`, `stop`, `advance`, `ffwd`, `record`, `play`, `guide`, `active`, `list`, `exit`, `back`, `menu`, `info`, `up`, `down`, `left`, `right`, `select`, `red`, `green`, `yellow`, `blue`, `chanup`, `chandown`, `prev`, `dash`, `enter` 

## More Info

[SHEF API Guide](http://www.satinstalltraining.com/homeautomation/DTV-MD-0359-DIRECTV_SHEF_Command_Set-V1.3.C.pdf)