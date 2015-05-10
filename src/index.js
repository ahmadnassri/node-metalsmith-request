'use strict'

var async = require('async')
var debug = require('debug')('metalsmith-request')
var got = require('got')
var util = require('util')

var defaults = {
  json: false,
  headers: {
    'user-agent': 'https://github.com/ahmadnassri/metalsmith-request'
  }
}

module.exports = function (targets, options) {
  targets = targets || {}
  options = util._extend(defaults, options || {})

  return function (files, metalsmith, done) {
    var metadata = metalsmith.metadata()

    function get (key, done) {
      var url = targets[key]

      debug('[%s](%s) >', key, url)

      got.get(url, options, function (err, data, res) {
        debug('[%s](%s) < %s: %s', key, url, res.statusCode, res.statusMessage)

        if (err) return done(err)

        metadata[key] = data

        done()
      })
    }

    async.each(Object.keys(targets), get, done)
  }
}
