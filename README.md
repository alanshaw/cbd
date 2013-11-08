cbd [![Build Status](https://travis-ci.org/alanshaw/cbd.png?branch=master)](https://travis-ci.org/alanshaw/cbd) [![devDependency Status](https://david-dm.org/alanshaw/cbd/dev-status.png)](https://david-dm.org/alanshaw/cbd#info=devDependencies)
===
For functions with optional callbacks.

Callback default. Return a noop function for when no callback function has been passed.

Usage
---
Instead of

```javascript
function foo (arg1, cb) {
  // Do work
  if (cb) {
    cb()
  }
}
```

You do

```javascript
var cbd = require("cbd")

function foo (arg1, cb) {
  // Do work
  cbd(cb)()
}
```

### Set default cb

```javascript
var cbd = require("cbd")

cbd.setDefault(function (er, res) {
  if (er) return console.error(er)
  console.log(res)
})
```

### Pass default cb

```javascript
var cbd = require("cbd")

function foo (arg1, cb) {
  // Do work
  cbd(cb, function () { console.log("foo callback", arguments) })()
}
```