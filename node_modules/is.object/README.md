# is.object

verifies if is an object and not an array or null

----
<a href="https://nodei.co/npm/is.object/"><img src="https://nodei.co/npm/is.object.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/is.object)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/is.object/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/is.object/blob/master/package.json#L40)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api
`const isObject = require('is.object')`

`isObject(value)`

#### example

```js
const isObject = require('is.object')

isObject({})// returns true
isObject(null)// returns false
isObject([])// returns false
```


#### ISC License (ISC)
