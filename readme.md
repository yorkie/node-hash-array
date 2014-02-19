
node-hash-array [![Build Status](https://travis-ci.org/yorkie/node-envm.png)](https://travis-ci.org/yorkie/node-hash-array)
=========================

hashify array and get element by its key

### Installation

```bash
$ npm install hash-array
```

### Usage

```js
var hashArray = require('hash-array');
var src = [
  { 'type': 'mail', value: 30 },
  { 'type': 'foll', value: 20 }
]
var hashedArr = hashArray(src, 'type');
console.log(hashedArr.get('mail')) // prints 30
console.log(hashedArr.get('foll')) // prints 20
```

### API

##### hashArray(src, key)
Scan a source array `src`, and generate a new object
based on passed 2nd argument `key`

##### .get(key)
Get value from your hashed array

##### .set(key, val)
Set value to your hashed array and source array

### License

MIT

