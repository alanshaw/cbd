var dflt = function () {}

module.exports = function (cb, d) {
  return cb || d || dflt
}

module.exports.setDefault = function (d) {
  dflt = d
}