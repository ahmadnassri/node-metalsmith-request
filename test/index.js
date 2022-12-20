const Metalsmith = require('metalsmith')
const { test, afterEach } = require('tap')
const rimraf = require('rimraf')

const request = require('..')

afterEach(() => rimraf('test/build', () => {}))

test('send request and update metadata', { timeout: 5000 }, (assert) => {
  const smith = new Metalsmith('test')

  const targets = {
    foo: 'http://mockbin.com/request?foo=bar',
    bar: 'http://mockbin.com/request?bar=baz'
  }

  smith.use(request(targets, { responseType: 'json' }))

  smith.build((err) => {
    assert.equal(err, null)

    const metadata = smith.metadata()

    assert.type(metadata.foo, Object)
    assert.type(metadata.foo.queryString, Object)
    assert.same(metadata.foo.queryString, { foo: 'bar' })

    assert.type(metadata.bar, Object)
    assert.type(metadata.bar.queryString, Object)
    assert.same(metadata.bar.queryString, { bar: 'baz' })

    assert.end()
  })
})
