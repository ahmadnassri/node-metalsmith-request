import { debuglog } from 'util'
import got from 'got'

const debug = debuglog('metalsmith-request')

const defaults = {
  json: false,
  headers: {
    'user-agent': 'https://github.com/ahmadnassri/metalsmith-request'
  }
}

module.exports = function (targets, options) {
  targets = targets || {}
  options = Object.assign({}, defaults, options)

  return (files, metalsmith, done) => {
    Promise.all(Object.keys(targets).map((key) => {
      let metadata = metalsmith.metadata()
      let url = targets[key]

      debug('[%s](%s) >', key, url)

      return got(url, options)
        .then(response => {
          debug('[%s](%s) < %s: %s', key, url, response.statusCode, response.statusMessage)

          return response.body
        })

        .then(body => (metadata[key] = body))
    }))

    .then(() => done())
    .catch(err => done(err))
  }
}
