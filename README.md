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

* `0`: undefined
* `1`: undefined
* `2`: undefined
* `3`: undefined
* `4`: undefined
* `5`: undefined
* `6`: undefined
* `7`: undefined
* `8`: undefined
* `9`: undefined
* `power`: undefined
* `poweron`: undefined
* `poweroff`: undefined
* `format`: undefined
* `pause`: undefined
* `rew`: undefined
* `replay`: undefined
* `stop`: undefined
* `advance`: undefined
* `ffwd`: undefined
* `record`: undefined
* `play`: undefined
* `guide`: undefined
* `active`: undefined
* `list`: undefined
* `exit`: undefined
* `back`: undefined
* `menu`: undefined
* `info`: undefined
* `up`: undefined
* `down`: undefined
* `left`: undefined
* `right`: undefined
* `select`: undefined
* `red`: undefined
* `green`: undefined
* `yellow`: undefined
* `blue`: undefined
* `chanup`: undefined
* `chandown`: undefined
* `prev`: undefined
* `dash`: undefined
* `enter`: undefined

## More Info

[SHEF API Guide](http://www.satinstalltraining.com/homeautomation/DTV-MD-0359-DIRECTV_SHEF_Command_Set-V1.3.C.pdf)