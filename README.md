# get-id

JavaScript function for creating a series of unique IDs.

## NPM Installation

```
npm install git+https://github.com/JamesRobertHugginsNgo/get-id.git#1.3.0
```

## Function: getId(prefix)

Argument | Type | Description
-- | -- | --
`prefix` | `string` | _Optional_. ID prefix. _Defaults to `''`_.

Return type: `string`.

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
