# get-id

JavaScript function for creating a series of unique IDs.

## NPM Installation

```
npm install git+https://github.com/JamesRobertHugginsNgo/get-id.git#1.2.0
```

## Function: getId(prefix)

Argument | Type | Description
-- | -- | --
`description` | `string` | Test description.
`func` | `function` | Test code. Return `true` for pass, `false` for fail, and any other value for unknown. Return a `Promise` to have `test` return a `Promise`.

Returns `string`.

``` JavaScript
import getId from 'get-id';

console.log(getId()); // '0'

console.log(getId()); // '1'

console.log(getId('prefix-')) // 'prefix-0'

console.log(getId('prefix-')) // 'prefix-1'
```

## Using Script Tag

The JavaScript library (found in the "dist" folder) can be used directly using an HTML script tag.

``` HTML
<script src="node_modules/test-group/dist/test-group.js"></script>
<script>
  console.log(getId());
</script>
```
