/* global describe, it */
'use strict'

var Metalsmith = require('metalsmith')
var request = require('..')

require('should')

describe('metalsmith-request', function () {
  this.timeout(5000)

  it('should send request and update metadata', function (done) {
    var smith = new Metalsmith('test')

    var options = {
      json: true
    }

    var targets = {
      foo: 'http://mockbin.com/request?foo=bar',
      bar: 'http://mockbin.com/request?bar=baz'
    }

    smith.use(request(targets, options))

    smith.build(function (err) {
      if (err) return done(err)

      var metadata = smith.metadata()

      metadata.foo.should.be.an.Object
      metadata.foo.should.have.property('queryString')
      metadata.foo.queryString.should.eql({ foo: 'bar' })

      metadata.bar.should.be.an.Object
      metadata.bar.should.have.property('queryString')
      metadata.bar.queryString.should.eql({ bar: 'baz' })

      done()
    })
  })
})
