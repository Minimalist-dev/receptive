# receptivo

This is a package developed to save work, time, resources on unit tests. Returning a response of two, the one expected or the result or fill value, which has been passed if the condition is not met. In its simplest functionality.

```js
const receptive = require('receptive')

let error = null;
let trust = null;//any value, object, element, etc. that you want to return if the error condition is not met.

receptive.paddingOne = 0;//any value, object, element, etc. that you want to return if the error condition is met. The default value is only set once unless you want to change it.

receptive.value(error, trust, receptive.paddingOne);//return 0.

trust = true;

receptive.value(error, trust, receptive.paddingOne);//return true.

/* Etc...
-------------------------------------------------------------------------------*/
receptive.value("false", "true", receptive.paddingOne);
receptive.valueOptionTwo("false", "true", receptive.paddingTwo, receptive.paddingThree)
```

## More ways to take advantage of its functionality

### String

```js
const receptive = require('receptive')

let left = "false";
let right = "false";

receptive.paddingOne = "Not available";

receptive.value(left, right, receptive.paddingOne);//return "Not available".

left = "false";
right = "true";

receptive.value(left, right, receptive.paddingOne);//return "true".

left = "true";
right = "true";

receptive.value(left, right, right);//return "true".
```

### Number

```js
const receptive = require('receptive');

let left = 0;
let right = 0;

receptive.paddingOne = 0;

receptive.value(left, right, receptive.paddingOne);//return 0.

left = 0;
right = 1;

receptive.value(left, right, receptive.paddingOne);//return 1.

left = 1;
right = 1;

receptive.value(left, right, right);//return 1.
```

### Boolean

```js
const receptive = require('receptive');

let left = false;
let right = false;

receptive.paddingOne = false;

receptive.value(left, right, receptive.paddingOne);//return false.

left = false;
right = true;

receptive.value(left, right, receptive.paddingOne);//return true.

left = true;
right = true;

receptive.value(left, right, right);//return true.
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
