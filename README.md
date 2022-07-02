# receptivo

This is a package developed to save work, time, resources on unit tests. 

Returning a response of two, the one expected or the result or fill value, 
which has been passed if the condition is not met. In its simplest functionality.

```js
const receptive = require('receptive')

let error = null;
let trust = null;//any value, object, element, etc. that you want to return if the error condition is not met.

receptive.paddingOne = 0;//any value, object, element, etc. that you want to return if the error condition is met. The default value is only set once unless you want to change it.

receptive.value(error, trust, receptive.paddingOne);//return 0.

trust = true;

receptive.value(error, trust, receptive.paddingOne);//return true.
```

## Functions
`value(not, yes, res)` 

`valueOptionTwo(not, yes, res, otherwise)` 

`operator(value, "operator", equivalent)` 
- receives three parameters the **value** to compare the **operator** and the **equivalent** of the value, if the condition is met it returns the equivalent.

`operatorPlus(value, "operator", equivalent, return)` 
- the same as the **operator()** function but in this case it returns the fourth parameter, if the condition is met.

## More ways to take advantage of its functionality

### String

```js
const receptive = require('receptive')

let left  = "false";
let right = "false";

receptive.paddingOne = "Not available";

receptive.value(left, right, receptive.paddingOne);//return "Not available".

left  = "false";
right = "true";

receptive.value(left, right, receptive.paddingOne);//return "true".

left  = "true";
right = "true";

receptive.value(left, right, right);//return "true".
```

### Number

```js
const receptive = require('receptive');

let left  = 0;
let right = 0;

receptive.paddingOne = 0;

receptive.value(left, right, receptive.paddingOne);//return 0.

left  = 0;
right = 1;

receptive.value(left, right, receptive.paddingOne);//return 1.

left  = 1;
right = 1;

receptive.value(left, right, right);//return 1.
```

### Boolean

```js
const receptive = require('receptive');

let left  = false;
let right = false;

receptive.paddingOne = false;

receptive.value(left, right, receptive.paddingOne);//return false.

left  = false;
right = true;

receptive.value(left, right, receptive.paddingOne);//return true.

left  = true;
right = true;

receptive.value(left, right, right);//return true.
```

### Array

```js
const receptive = require('receptive');

let left  = ["string", { res: "Not available" }, false  ];
let right = ["string", { res: "Available"     }, true   ];

receptive.paddingOne = left[1].res;

receptive.value(left[0], right[0], receptive.paddingOne);//return "Not available".

receptive.value(left[0], right[1].res, receptive.paddingOne);//return "Available".

receptive.value(left[0], right[0], right[2]);//return true.
```

### Object

```js
const receptive = require('receptive');

let left  = { 
    res:  "Not available", 
    more: "Available"
}; 

let right = { 
    res:  "Available",
    more: "Not available"
};

receptive.paddingOne = left.res;

receptive.value(left.more, right.res, receptive.paddingOne);//return "Not available".

receptive.value(left.res, right.res, receptive.paddingOne);//return "Available".

receptive.value(left.more, right.res, right.res);//return "Available".
```
## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install receptive
```

## License

  [ISC](LICENSE)
