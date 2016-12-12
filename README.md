# The English2Number Javascript Library


[![build status](https://gitlab.com/TSavo/english2number-js/badges/master/build.svg)](https://gitlab.com/TSavo/english2number-js/commits/master) [![coverage report](https://gitlab.com/TSavo/english2number-js/badges/master/coverage.svg)](https://gitlab.com/TSavo/english2number-js/commits/master) [![dependencies Status](https://david-dm.org/tsavo/english2number-js/status.svg)](https://david-dm.org/tsavo/english2number-js)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/89e3660a6b4042938b84e6e2f565fcc8)](https://www.codacy.com/app/evilgenius/english2number-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=TSavo/english2number-js&amp;utm_campaign=Badge_Grade) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/89e3660a6b4042938b84e6e2f565fcc8)](https://www.codacy.com/app/evilgenius/english2number-js?utm_source=github.com&utm_medium=referral&utm_content=TSavo/english2number-js&utm_campaign=Badge_Coverage) [![Code Climate](https://codeclimate.com/github/TSavo/english2number-js/badges/gpa.svg)](https://codeclimate.com/github/TSavo/english2number-js) [![Test Coverage](https://codeclimate.com/github/TSavo/english2number-js/badges/coverage.svg)](https://codeclimate.com/github/TSavo/english2number-js/coverage) [![Issue Count](https://codeclimate.com/github/TSavo/english2number-js/badges/issue_count.svg)](https://codeclimate.com/github/TSavo/english2number-js) [![CircleCI](https://circleci.com/gh/TSavo/english2number-js.svg?style=svg)](https://circleci.com/gh/TSavo/english2number-js)


## What it does

Converts English words to numbers.

The following inputs will return this number: 123,456,789,001

- "123,456,789,001" (numerical)
- "123,456,789,001st" (ordinal)
- "one hundred and twenty-three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand and one" (cardinal)
- "a hundred and twenty-three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand and one" (cardinal)
- "one hundred twenty-three billion, four hundred fifty-six million, seven hundred eighty-nine thousand, one" (cardinal)
- "one hundred twenty-three billion four hundred fifty-six million seven hundred eighty-nine thousand one" (cardinal)
- "a hundred twenty-three billion, four hundred fifty-six million, seven hundred eighty-nine thousand, and one" (cardinal)
- "a hundred and twenty-three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand and first" (ordinal)
- "one hundred twenty-three billion, four hundred fifty-six million, seven hundred eighty-nine thousand, first" (ordinal)

And in fact really any reasonable combination of cardinal and ordinal English speech patterns for describing numbers.

## What's the limit?

It doesn't parse anything bigger than decillion, which is 33 zeros after the 1, or 1000000000000000000000000000000000.

If you think it should, it would be trivial to add larger number support, but Javascript can't realistically represent that precision anyway. Perhaps a BigNumber version of this library would be in order.

# Installation

    npm install --save english2number 

# Example Usage

#### As a module:
```javascript
var toNumber = require("english2number");

toNumber("one hundred and twenty-three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand and one") // 123,456,789,001
```

# Why not [numeral.js](http://numeraljs.com/)?

[numeral.js](http://numeraljs.com/) is an amazing library for dealing with numerals, but it lacks support for English parsing.

# Contributing
Pull requests are welcome, please file any bugs on https://github.com/tsavo/english2number-js