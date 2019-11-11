"use strict"

module.exports = (...values) => values.slice(1).every((val, i) => val > values[i])
