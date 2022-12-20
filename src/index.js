const { debuglog } = require('util')
const got = require('got')

const debug = debuglog('metalsmith-request')

const defaults = {
  headers: {
    'user-agent': 'https://github.com/ahmadnassri/node-metalsmith-request'
  }
}

module.exports = function (targets = {}, options = {}) {
  options = Object.assign({}, defaults, options)

  return (files, metalsmith, done) => {
    Promise.all(Object.keys(targets).map(async key => {
      const metadata = metalsmith.metadata()
      const url = targets[key]

      debug('[%s](%s) >', key, url)
      const response = await got(url, options)

      debug('[%s](%s) < %s: %s', key, url, response.statusCode, response.statusMessage)

      metadata[key] = response.body
    }))

      .then(() => done())
      .catch(err => done(err))
  }
}
