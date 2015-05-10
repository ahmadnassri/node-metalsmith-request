# Metalsmith Request [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

[Metalsmith](http://www.metalsmith.io/) plugin to grab content from the web and expose the results to metadata.

uses [got](https://github.com/sindresorhus/got) under the hood to make HTTP calls.

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependencies][david-image]][david-url]

## Install

```sh
npm install --save metalsmith-request
```

## API

Pass `targets` to the plugin with the `use` method:

```js
var Metalsmith = require('metalsmith')
var request = require('metalsmith-request')

var metalsmith = new Metalsmith(__dirname)
  .use(request({
    foo: 'http://domain.com/foo'
  }))
```

You can also pass `options` as the second argument to use with the [got](https://github.com/sindresorhus/got) module

```js
var Metalsmith = require('metalsmith')
var request = require('metalsmith-request')

var metalsmith = new Metalsmith(__dirname)
  .use(request(
    {
      foo: 'http://domain.com/foo.json'
    }, 
    {
      json: true
    }
  ))
```

## CLI

You can also use the plugin with the Metalsmith CLI by adding a key to your `metalsmith.json` file:

```json
{
  "plugins": {
    "metalsmith-request": {
      "foo": "http://domain.com/foo.json"
    }
  }
}
```

## Support

Donations are welcome to help support the continuous development of this project.

[![Gratipay][gratipay-image]][gratipay-url]
[![PayPal][paypal-image]][paypal-url]
[![Flattr][flattr-image]][flattr-url]
[![Bitcoin][bitcoin-image]][bitcoin-url]

## License

[MIT](LICENSE) &copy; [Ahmad Nassri](https://www.ahmadnassri.com)

[license-url]: https://github.com/ahmadnassri/metalsmith-request/blob/master/LICENSE

[travis-url]: https://travis-ci.org/ahmadnassri/metalsmith-request
[travis-image]: https://img.shields.io/travis/ahmadnassri/metalsmith-request.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/metalsmith-request
[npm-license]: https://img.shields.io/npm/l/metalsmith-request.svg?style=flat-square
[npm-version]: https://img.shields.io/npm/v/metalsmith-request.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/metalsmith-request.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/metalsmith-request
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/metalsmith-request.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/ahmadnassri/metalsmith-request.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/metalsmith-request
[david-image]: https://img.shields.io/david/ahmadnassri/metalsmith-request.svg?style=flat-square

[gratipay-url]: https://www.gratipay.com/ahmadnassri/
[gratipay-image]: https://img.shields.io/gratipay/ahmadnassri.svg?style=flat-square

[paypal-url]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UJ2B2BTK9VLRS&on0=project&os0=metalsmith-request
[paypal-image]: http://img.shields.io/badge/paypal-donate-green.svg?style=flat-square

[flattr-url]: https://flattr.com/submit/auto?user_id=codeinchaos&url=https://github.com/ahmadnassri/metalsmith-request&title=metalsmith-request&language=&tags=github&category=software
[flattr-image]: http://img.shields.io/badge/flattr-donate-green.svg?style=flat-square

[bitcoin-image]: http://img.shields.io/badge/bitcoin-1Nb46sZRVG3or7pNaDjthcGJpWhvoPpCxy-green.svg?style=flat-square
[bitcoin-url]: https://www.coinbase.com/checkouts/ae383ae6bb931a2fa5ad11cec115191e?name=metalsmith-request
