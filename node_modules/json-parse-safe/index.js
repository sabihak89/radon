'use strict'

module.exports = JSONParse

function JSONParse (text, reviver) {
  try {
    return {
      value: JSON.parse(text, reviver)
    }
  } catch (ex) {
    return {
      error: ex
    }
  }
}
