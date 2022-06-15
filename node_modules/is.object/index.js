/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

module.exports = isObject

function isObject (val) {
  return !(val == null || typeof val !== 'object' || Array.isArray(val))
}
