# json-parse-safe

Parse your json safely and stop writing `try {} catch {}`

<a href="https://nodei.co/npm/json-parse-safe/"><img src="https://nodei.co/npm/json-parse-safe.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/json-parse-safe)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/json-parse-safe/blob/master/LICENSE)

## Syntax
> var JSONParse = require('json-parse-safe') <br> JSONParse(text[, reviver])

### Parameters
##### text
*   the string to parse as JSON

##### reviver *(optional)*
*   if a function, prescribes how the value originally produced by parsing is transformed, before being returned, more info about this param in [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Example.3A_Using_the_reviver_parameter)

### Returns
##### object `{value, error}` 
*   **value:** should be the **object** corresponding to the given JSON text or **undefined** in case of error
*   **error:** should be an **Error** object in case of error or **undefined** in case of success


## Example

``` js
var JSONParse = require('json-parse-safe');

var str = '{"cat": "Peter", "age": 1, "colors": ["white", "cyan", "black"]}';

var obj = JSONParse(str);
// obj.value should be
{
    cat: 'Peter',
    age: 1,
    colors: ['white', 'cyan', 'black']
}
```

**getting the exception**
``` js
var bad = '{"cat": "Peter" "age": 1}';

var obj = JSONParse(str);

// obj.value should be 'undefined'
// obj.error should be an Error
console.log(obj.error);
console.log(obj.error.message);
console.log(obj.error.stack);
```

## Development

##### This project has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit



to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
