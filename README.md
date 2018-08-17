# Partial application and curring for functions

A simple example of partial application and curring applied to functions

## Curring

```js
const curry = require('.');

const sum = curry((a,b) => a+b);

sum(1,1)  // direct 2
sum(1)(1) // with curry 2
```

## Partial Application

```js
const curry = require('.');

const sum = curry((a,b,c) => a+b+c);

sum(1,1,1)   // direct 3
sum(1)(1)(1) // with curry 3
sum(1,1)(1)  // with left partial application
sum(1)(1,1)  // with right partial application
```

