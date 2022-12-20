# Metalsmith Request

Metalsmith plugin to grab content from the web and expose the results to metadata

[![license][license-img]][license-url]
[![release][release-img]][release-url]
[![semantic][semantic-img]][semantic-url]

uses [got][] under the hood to make HTTP calls.

## Install

``` bash
npm install metalsmith-request
```

## API

Pass `targets` to the plugin with the `use` method:

```js
metalsmith.use(request({ target: 'http://domain.com/foo' }))
```

You can also pass `options` as the second argument to use with the [got][] module

```js
const targets = { 
  foo: 'http://domain.com/foo.json'
}

const options = {
  responseType: true
}

metalsmith.use(request(targets, options))
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

  [got]: https://github.com/sindresorhus/got

----
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull;
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/node-metalsmith-request

[release-url]: https://github.com/ahmadnassri/node-metalsmith-request/releases
[release-img]: https://badgen.net/github/release/ahmadnassri/node-metalsmith-request

[semantic-url]: https://github.com/ahmadnassri/node-metalsmith-request/actions?query=workflow%3Arelease
[semantic-img]: https://badgen.net/badge/📦/semantically%20released/blue
