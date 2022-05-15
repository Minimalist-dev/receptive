# receptivo

This is a package developed to save work, time, resources on unit tests. Returning a response of two, the one expected or the result or fill value, which has been passed if the condition is not met.

```js
const receptive = require('receptive')

let error = null;
let trust = true;//any value, object, element, etc. that you want to return if the error condition is not met.

receptive.paddingOne = 0;//any value, object, element, etc. that you want to return if the error condition is met. The default value is only set once unless you want to change it.

receptive.value(error, trust, receptive.paddingOne);//return 0.

error = true;

receptive.value(error, trust, receptive.paddingOne);//return true.

/* More
-------------------------------------------------------------------------------*/
receptive.value("false", "true", receptive.paddingOne);
receptive.valueOptionTwo("false", "true", receptive.paddingTwo, receptive.paddingThree)
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
