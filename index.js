
module.exports = function(fn) {
  let partiallyApplied = [];
  return function curry(...args){
    if (partiallyApplied.concat(args).length >= fn.length) {
      args = partiallyApplied.concat(args);
      return fn(...args);
    } else {
      partiallyApplied = partiallyApplied.concat(args);
      return curry;
    }
  };
};
