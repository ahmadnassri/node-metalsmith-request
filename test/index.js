const Metalsmith = require('metalsmith')
const request = require('..')
const { test } = require('tap')

test('send request and update metadata', { timeout: 5000 }, (assert) => {
  let smith = new Metalsmith('test')

  let options = {
    json: true
  }

  let targets = {
    foo: 'http://mockbin.com/request?foo=bar',
    bar: 'http://mockbin.com/request?bar=baz'
  }

  smith.use(request(targets, options))

  smith.build((err) => {
    assert.equal(err, null)

    let metadata = smith.metadata()

    assert.type(metadata.foo, Object)
    assert.type(metadata.foo.queryString, Object)
    assert.same(metadata.foo.queryString, { foo: 'bar' })

    assert.type(metadata.bar, Object)
    assert.type(metadata.bar.queryString, Object)
    assert.same(metadata.bar.queryString, { bar: 'baz' })

    assert.end()
  })
})
