# Simple polish ID card number validator

[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]

Currently polish ID card numbers contains of three letters and six digits. Valid numbers are written in format "XXX NNNNNN", where "X" is a letter and "X" is a digit. The space character is optional.

The control digit is first digit, after letters. For example in number: "ABS 123456" control digit equal "1".

In algorithm of control digit validation letters are presented as numbers, where "A" equal "10" and "Z" qeual "35". In polish ID card are allowed only latin letters.

**Using validator:**

First steep - instalation from NPM:

```javascript
npm install validate-polish-id-card
```

Using validator in the application code:

```javascript
const validatePolishIDCard = require( 'polish-id-card-validate' );

validatePolishIDCard( 'ABS123456' ); //true
validatePolishIDCard( 'abs123456' ); //true

validatePolishIDCard( 'ABS 123456' ); //true
validatePolishIDCard( 'abs 123456' ); //true

validatePolishIDCard( 'ABS523456' ); //false, invalid control digit!
```

*Validator can be use only for new ID card numbers in format "XXX NNNNNN". For old ID card numbers (without control digit) validator returns always FALSE.*

<!-- vars -->
[license-image]:https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: #license
[travis-image]:https://img.shields.io/travis/drogimex/isbn-validate.svg?style=flat-square
[travis-url]:https://travis-ci.org/drogimex/isbn-validate
