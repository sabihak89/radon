'use strict'

const crypto = require('crypto')
const b64url = require('base64-url')
const inherits = require('util').inherits
const parse = require('json-parse-safe')
const extend = require('xtend')
const isObject = require('is.object')

//
// supported algorithms
//

const algorithms = {
  HS256: { hash: 'sha256', type: 'hmac' },
  HS384: { hash: 'sha384', type: 'hmac' },
  HS512: { hash: 'sha512', type: 'hmac' },
  RS256: { hash: 'RSA-SHA256', type: 'sign' }
}

//
// JSON Web Token
//

const jwt = module.exports

jwt.JWTError = JWTError
jwt.getAlgorithms = getAlgorithms
jwt.encode = encode
jwt.decode = decode

function getAlgorithms () {
  return Object.keys(algorithms)
}

function encode (key, data, algorithm, cb) {
  if (isFunction(algorithm, 'function')) {
    cb = algorithm
    algorithm = 'HS256'
  }

  var defaultHeader = { typ: 'JWT', alg: algorithm }

  var payload = isObject(data) && data.payload ? data.payload : data

  var header =
    isObject(data) && data.header
      ? extend(data.header, defaultHeader)
      : defaultHeader

  const validationError = encodeValidations(key, payload, algorithm)

  if (validationError) {
    return prcResult(validationError, null, cb)
  }

  const parts =
    b64url.encode(JSON.stringify(header)) +
    '.' +
    b64url.encode(JSON.stringify(payload))

  return prcResult(
    null,
    parts + '.' + sign(algorithms[algorithm], key, parts),
    cb
  )
}

function decode (key, token, cb) {
  if (paramsAreFalsy(key, token)) {
    return prcResult('The key and token are mandatory!', null, cb)
  }

  const parts = token.split('.')

  // check all parts're present
  if (parts.length !== 3) {
    return prcResult('The JWT should consist of three parts!', null, cb)
  }

  // base64 decode and parse JSON
  const header = JSONParse(b64url.decode(parts[0]))
  const payload = JSONParse(b64url.decode(parts[1]))

  // get algorithm hash and type and check if is valid
  const algorithm = algorithms[header.alg]

  if (!algorithm) {
    return prcResult('The algorithm is not supported!', null, cb)
  }

  // verify the signature
  const res = verify(algorithm, key, parts.slice(0, 2).join('.'), parts[2])

  return prcResult((!res && 'Invalid key!') || null, payload, header, cb)
}

function encodeValidations (key, payload, algorithm) {
  return paramsAreFalsy(key, payload)
    ? 'The key and payload are mandatory!'
    : !Object.keys(payload).length
      ? 'The payload is an empty object!'
      : !algorithms[algorithm] && 'The algorithm is not supported!'
}

//
// JWT token error
//

function JWTError (message) {
  Error.call(this)
  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.message = message
}

inherits(JWTError, Error)

//
// Utils methods
//

function sign (alg, key, input) {
  return alg.type === 'hmac'
    ? b64url.escape(
      crypto
        .createHmac(alg.hash, key)
        .update(input)
        .digest('base64')
    )
    : b64url.escape(
      crypto
        .createSign(alg.hash)
        .update(input)
        .sign(key, 'base64')
    )
}

function verify (alg, key, input, signVar) {
  return alg.type === 'hmac'
    ? signVar === sign(alg, key, input)
    : crypto
      .createVerify(alg.hash)
      .update(input)
      .verify(key, b64url.unescape(signVar), 'base64')
}

function prcResult (err, payload, header, cb) {
  if (isFunction(header, 'function')) {
    cb = header
    header = undefined
  }

  err = err && new JWTError(err)

  return cb
    ? cb(err, payload, header)
    : header
      ? { error: err, value: payload, header: header }
      : { error: err, value: payload }
}

function isFunction (param) {
  return !param || typeof param === 'function'
}

function paramsAreFalsy (param1, param2) {
  return !param1 || !param2
}

function JSONParse (str) {
  const res = parse(str)

  return res.error ? '' : res.value
}
