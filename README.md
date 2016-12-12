# The English2Number Javascript Library


[![build status](https://gitlab.com/TSavo/english2number-js/badges/master/build.svg)](https://gitlab.com/TSavo/english2number-js/commits/master) [![coverage report](https://gitlab.com/TSavo/english2number-js/badges/master/coverage.svg)](https://gitlab.com/TSavo/english2number-js/commits/master) [![dependencies Status](https://david-dm.org/tsavo/english2number-js/status.svg)](https://david-dm.org/tsavo/english2number-js)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/89e3660a6b4042938b84e6e2f565fcc8)](https://www.codacy.com/app/evilgenius/english2number-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=TSavo/english2number-js&amp;utm_campaign=Badge_Grade) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/89e3660a6b4042938b84e6e2f565fcc8)](https://www.codacy.com/app/evilgenius/english2number-js?utm_source=github.com&utm_medium=referral&utm_content=TSavo/english2number-js&utm_campaign=Badge_Coverage) [![Code Climate](https://codeclimate.com/github/TSavo/english2number-js/badges/gpa.svg)](https://codeclimate.com/github/TSavo/english2number-js) [![Test Coverage](https://codeclimate.com/github/TSavo/english2number-js/badges/coverage.svg)](https://codeclimate.com/github/TSavo/english2number-js/coverage) [![Issue Count](https://codeclimate.com/github/TSavo/english2number-js/badges/issue_count.svg)](https://codeclimate.com/github/TSavo/english2number-js) [![CircleCI](https://circleci.com/gh/TSavo/english2number-js.svg?style=svg)](https://circleci.com/gh/TSavo/english2number-js)

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