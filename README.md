# React DOMify

Like JSON.strinfigy but uses React.js to generate DOM elements.


## Demo & Examples

Live demo: [JedWatson.github.io/react-domify](http://JedWatson.github.io/react-domify/)

To build the examples locally, run:

```
npm install
gulp dev
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-domify is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-domify.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-domify --save
```


## Usage

Provide the variable to render as the `value` property.

```
var DOMify = require('react-domify');

var data = {
  str: 'It formats strings, numbers, booleans and dates',
  bool: true,
  date: new Date(),
  num: 42,
  arr: [
    'And nested arrays / objects',
    {
      key: 'value'
    }
  ]
};

<DOMify value={data} />
```

### License

MIT. Copyright (c) 2016 Jed Watson.
