
module.exports = function(fn) {
  return (function curry(...prev) {
    return function(...args) {
      args = prev.concat(args);
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return curry(...args);
      }
    };
  })();
};
