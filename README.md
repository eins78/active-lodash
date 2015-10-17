# active-lodash

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
<!-- [![Downloads][download-badge]][npm-url] -->

> A version of lodash customized to feel more like Ruby/Rails/ActiveSupport.

## Features

-   custom, reduced, modern build of `lodash`

-   **non-destructive `merge`**, `assign`, `extend`, etc.  
(They are always returning a new object)

-   **`present()`** and **`presence()`**

-   Does not extend prototypes.  
(If you want that, have a look at [rodash][] or [activesupport][])

-   [**`<your idea here>`**](https://github.com/eins78/active-lodash/issues)

## Install

```sh
npm i -D @eins78/active-lodash
```

## Usage

```js
import f from '@eins78/active-lodash'
```

or

```js
var f = require('@eins78/active-lodash')

```

then

```js
assert.equal((f(23).presence() || 42), 23)
assert.equal((f(null).presence() || 42), 42)

assert.equal(f.present({a: 1}), true)
assert.equal(f.present([1]), true)
assert.equal(f.present(true), true)
assert.equal(f.present(false), true)
assert.equal(f.present(function () {}), true)

assert.equal(f.present({}), false)
assert.equal(f.present([]), false)
assert.equal(f.present(undefined), false)
assert.equal(f.present(null), false)
```

(See [tests][] for more Examples.)

## License

CC-0 © [Max F. Albrecht](http://github.com/eins78)

[tests]: https://github.com/eins78/active-lodash/blob/master/test/tests.js
[lodash-inflection]: https://www.npmjs.com/package/lodash-inflection
[rodash]: https://github.com/obie/rodash
[activesupport]: https://www.npmjs.com/package/activesupport

[npm-url]: https://npmjs.org/package/active-lodash
[npm-image]: https://img.shields.io/npm/v/@eins78/active-lodash.svg?style=flat-square

[travis-url]: https://travis-ci.org/eins78/active-lodash
[travis-image]: https://img.shields.io/travis/eins78/active-lodash.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/eins78/active-lodash
[coveralls-image]: https://img.shields.io/coveralls/eins78/active-lodash.svg?style=flat-square

[depstat-url]: https://david-dm.org/eins78/active-lodash
[depstat-image]: https://david-dm.org/eins78/active-lodash.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/active-lodash.svg?style=flat-square
