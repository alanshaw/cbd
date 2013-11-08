var test = require("tape").test
  , cbd = require("./")

test("Returns callback when callback is set", function (t) {
  t.plan(1)

  var cb = function () {}

  var cbdcb = cbd(cb)

  t.equal(cb, cbdcb)
})

test("Calls user set default function", function (t) {
  t.plan(1)

  cbd.setDefault(function () {
    t.ok(true)
    t.end()
  })

  cbd()()
})

test("Calls passed default function", function (t) {
  t.plan(1)

  cbd.setDefault(function () {
    t.ok(false)
  })

  cbd(null, function () {
    t.ok(true)
    t.end()
  })()
})