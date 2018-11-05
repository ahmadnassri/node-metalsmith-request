# Meatsmith Request

[![License][license-image]][license-url] [![version][npm-image]][npm-url] [![Build Status][circle-image]][circle-url]

> [Metalsmith](http://www.metalsmith.io/) plugin to grab content from the web and expose the results to metadata.

uses [got](https://github.com/sindresorhus/got) under the hood to make HTTP calls.

## Install

```bash
npm install metalsmith-request
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

---
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull; 
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &bull; 
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-image]: https://img.shields.io/github/license/ahmadnassri/metalsmith-request.svg?style=for-the-badge&logo=circleci

[circle-url]: https://circleci.com/gh/ahmadnassri/workflows/metalsmith-request
[circle-image]: https://img.shields.io/circleci/project/github/ahmadnassri/metalsmith-request/master.svg?style=for-the-badge&logo=circleci

[npm-url]: https://www.npmjs.com/package/metalsmith-request
[npm-image]: https://img.shields.io/npm/v/metalsmith-request.svg?style=for-the-badge&logo=npm
