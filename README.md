# Metalsmith Request [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

> [Metalsmith](http://www.metalsmith.io/) plugin to grab content from the web and expose the results to metadata.

uses [got](https://github.com/sindresorhus/got) under the hood to make HTTP calls.

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

## Install

```bash
npm install --production --save metalsmith-request
```

## Usage

I recommend using an optimized build matching your Node.js environment version, otherwise, the standard `require` would work just fine with any version of Node `>= v4.0` .

```js
/*
 * Node 7
 */
const request = require('metalsmith-request/lib/node7')

/*
 * Node 6
 */
const request = require('metalsmith-request/lib/node6')

/*
 * Node 4 (Default)
 * Note: additional ES2015 polyfills may be required
 */
var request = require('metalsmith-request')
```

## API

Pass `targets` to the plugin with the `use` method:

```js
const metalsmith = new Metalsmith(__dirname)
  .use(request({
    foo: 'http://domain.com/foo'
  }))
```

You can also pass `options` as the second argument to use with the [got](https://github.com/sindresorhus/got) module

```js
const metalsmith = new Metalsmith(__dirname)
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

----
> :copyright: [ahmadnassri.com](https://www.ahmadnassri.com/) &nbsp;&middot;&nbsp;
> License: [ISC][license-url] &nbsp;&middot;&nbsp;
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &nbsp;&middot;&nbsp;
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/

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

[dependencyci-url]: https://dependencyci.com/github/ahmadnassri/metalsmith-request
[dependencyci-image]: https://dependencyci.com/github/ahmadnassri/metalsmith-request/badge?style=flat-square
