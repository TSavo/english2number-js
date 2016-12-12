# The English2Number Javascript Library

## What it does

Converts English words to numbers.

Supports 0 through 100 in the following forms:

- Numerical ("0", "2", "23", "77")
- Ordinal ("0th", "2nd", "23rd", "77th")
- By Name ("zero", "two", "twenty-three"/"twenty three", "seventy-seven"/"seventy seven")
- By Ordinal Name ("zeroth", "second", "twenty-third", "seventy-seventh")

## How it does it

It takes the form: 

    englishToNumber(english) => number

# Installation

    npm install --save proportionate 

# Example Usage

#### As a module:
```javascript
var toNumber = require("english2number");

toNumber("seventy-seventh") // 77
```

# Why not [numeral.js](http://numeraljs.com/)?

[numeral.js](http://numeraljs.com/) is an amazing library for dealing with numerals, but it lacks support for english parsing.

# Contributing
Pull requests are welcome, please file any bugs on https://github.com/tsavo/proportionate-js