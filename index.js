"use strict"

module.exports = (...values) => values.slice(1).every((value, index) => value > values[index])
