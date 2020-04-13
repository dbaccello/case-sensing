# case-sensing

![npm](https://img.shields.io/npm/v/case-sensing)
![Travis (.org)](https://img.shields.io/travis/dbaccello/case-sensing)
![Codecov](https://img.shields.io/codecov/c/github/dbaccello/case-sensing)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![npm](https://img.shields.io/npm/dy/case-sensing)
![GitHub last commit](https://img.shields.io/github/last-commit/dbaccello/case-sensing)
![NPM](https://img.shields.io/npm/l/case-sensing)

## Installation
### Node.js
```
npm install --save case-sensing
```

```javascript
import * as CS from "case-sensing";
if (CS.isLowerCase("i like climbing mountains")) {
  console.log("The string is in lowercase!");
}
//or
import { isLowerCase } from "case-sensing";
if (isLowerCase("i like climbing mountains")) {
  console.log("The string is in lowercase!");
}
```
## Functions

### isLowerCase

Given a string with all letters in lowercase return 'true', or if a percentage of tollerance is present return 'true' if the threshold has not been exceeded.

#### Use
```javascript
CS.isLowerCase(text, rate);
```

#### Parameters
* **text** - The text string to be checked. Must be not empty.
* **rate** - The percentage of tollerance. Must be inside the range 0 to 100, default to 100.

#### Examples
```javascript
CS.isLowerCase("i like climbing mountains");
//true

CS.isLowerCase("i like climbing MOUNTAINS");
//false

CS.isLowerCase("TeleVision", 80);
//true
```

### isUpperCase

Given a string with all letters in uppercase return 'true', or if a percentage of tollerance is present return 'true' if the threshold has not been exceeded.

#### Use
```javascript
CS.isUpperCase(text, rate);
```

#### Parameters
* **text** - The text string to be checked. Must be not empty.
* **rate** - The percentage of tollerance. Must be inside the range 0 to 100, default to 100.

#### Examples
```javascript
CS.isUpperCase("I LIKE CLIMBING MOUNTAINS");
//true

CS.isUpperCase("I LIKE CLIMBING mountains");
//false

CS.isUpperCase("tELEvISION", 80);
//true
```

### isSentenceCase

Given a string with only first letter in uppercase and all others in lowercase return 'true', or if a percentage of tollerance is present return 'true' if the threshold has not been exceeded.

#### Use
```javascript
CS.isSentenceCase(text, rate);
```

#### Parameters
* **text** - The text string to be checked. Must be not empty.
* **rate** - The percentage of tollerance. Must be inside the range 0 to 100, default to 100.

#### Examples
```javascript
CS.isSentenceCase("I like climbing mountains");
//true
CS.isSentenceCase("i like climbing mountains");
//false
```

### isCapitalCase

Given a string with only first letter in uppercase and all others in lowercase for all words of sentence return 'true', or if a percentage of tollerance is present return 'true' if the threshold has not been exceeded.

#### Use
```javascript
CS.isSentenceCase(text, rate);
```

#### Parameters
* **text** - The text string to be checked. Must be not empty.
* **rate** - The percentage of tollerance. Must be inside the range 0 to 100, default to 100.

#### Examples
```javascript
CS.isCapitalCase("I Like Climbing Mountains");
//true
CS.isCapitalCase("I Like Climbing mountains");
//false
```

## License
MIT. See the License file for more info.
