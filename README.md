# NRange [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/nrange/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/nrange)

Check if numbers or strings are ordered from smallest to largest.

[![NPM Badge](https://nodei.co/npm/nrange.png)](https://npmjs.com/package/nrange)

## Install

```sh
npm install nrange
```

## Usage

```js
const nRange = require("nrange");

nRange(1, 2, 3);
//=> true

nRange(1, 3, 2);
//=> false

nRange("a", "b", "c");
//=> true

nRange("a", "c", "b");
//=> false
```

## API

### nRange(...values)

#### values

Type: `strings or numbers`

The values to compare.
