# json-web-token

JWT encode and decode for Node.js that can use callbacks or by returning an object `{error:, value:}`


**WIKI**

JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JavaScript Object Notation (JSON) object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or MACed and/or encrypted.


[info](http://tools.ietf.org/html/draft-ietf-oauth-json-web-token-08) & [more info](http://self-issued.info/docs/draft-jones-json-web-token-01.html)


<a href="https://nodei.co/npm/json-web-token/"><img src="https://nodei.co/npm/json-web-token.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/json-web-token)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/json-web-token/blob/master/LICENSE)

the version `2.*.*` should work only for NodeJS >= **4** for NodeJS **0.10** and **0.12** should install the version `1.6.3`

### API


##### jwt#encode(key, payload, [algorithm], cb)

* **key**, your secret
* **payload**, the payload or Claim Names or an object with {payload, header}

*ex:*
```js
{
   "iss": "my_issurer",
  "aud": "World",
  "iat": 1400062400223,
  "typ": "/online/transactionstatus/v2",
  "request": {
    "myTransactionId": "[myTransactionId]",
    "merchantTransactionId": "[merchantTransactionId]",
    "status": "SUCCESS"
  }
}
```

*attention that exists some reserved claim names (like "iss", "iat", etc..) check [in here](http://tools.ietf.org/html/draft-ietf-oauth-json-web-token-08#section-4) for more info about JWT Claims.*
* **algorithm**, default to 'sha256', use *jwt#getAlgorithms()* to get the supported algorithms
* **cb**, the callback(err[name, message], token)


#####  jwt#decode(key, token, cb)

* **key**, your secret
* **token**, the JWT token
* **cb**, the callback(err[name, message], decodedPayload[, decodedHeader])


#### Example

```js
var jwt = require('json-web-token');

var payload = {
  "iss": "my_issurer",
  "aud": "World",
  "iat": 1400062400223,
  "typ": "/online/transactionstatus/v2",
  "request": {
    "myTransactionId": "[myTransactionId]",
    "merchantTransactionId": "[merchantTransactionId]",
    "status": "SUCCESS"
  }
};

var secret = 'TOPSECRETTTTT';

// encode
jwt.encode(secret, payload, function (err, token) {
  if (err) {
    console.error(err.name, err.message);
  } else {
    console.log(token);

    // decode
    jwt.decode(secret, token, function (err_, decodedPayload, decodedHeader) {
      if (err) {
        console.error(err.name, err.message);
      } else {
        console.log(decodedPayload, decodedHeader);
      }
    });
  }
});
```

**using the optional [reserved headers](http://self-issued.info/docs/draft-jones-json-web-token-01.html#ReservedHeaderParameterName) (alg and typ can't be set using this method)**
```js
var settingAddHeaders = {
  payload: {
    "iss": "my_issurer",
    "aud": "World",
    "iat": 1400062400223,
    "typ": "/online/transactionstatus/v2",
    "request": {
      "myTransactionId": "[myTransactionId]",
      "merchantTransactionId": "[merchantTransactionId]",
      "status": "SUCCESS"
    }
  },
  header: {
    kid: 'key ID'
  }
}

jwt.encode(secret, settingAddHeaders, function (err, token) {

})

```


---

#### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit

to run test
```js
npm test
```

to run jshint
```js
npm run lint
```

to run code style
```js
npm run style
```

to run code coverage
```js
npm run coverage
```

to open the code coverage report
```js
npm run coverage:open
```

to run benchmarks
```js
npm run bench
```

to run the source complexity tool
```js
npm run complexity
```

to open the complexity report
```js
npm run complexity:open
```
