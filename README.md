# get-id

Returns a unique ID for a given prefix.

## Installation

```
npm install --save git+https://github.com/JamesRobertHugginsNgo/get-id.git#1.0.1
```

## Usage

``` JavaScript
import getId from 'get-id';

console.log(getId()); // '0'

console.log(getId()); // '1'

console.log(getId('prefix-')) // 'prefix-0'

console.log(getId('prefix-')) // 'prefix-1'
```
