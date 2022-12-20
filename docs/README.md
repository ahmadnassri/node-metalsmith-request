uses [got](https://github.com/sindresorhus/got) under the hood to make HTTP calls.

## Install

```bash
npm install metalsmith-request
```

## API

Pass `targets` to the plugin with the `use` method:

```js
metalsmith.use(request({ target: 'http://domain.com/foo' }))
```

You can also pass `options` as the second argument to use with the [got](https://github.com/sindresorhus/got) module

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
