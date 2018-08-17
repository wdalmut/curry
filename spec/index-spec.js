const curry = require('..');

describe("Curry", () => {
  it("should curring empty function", () => {
    expect(curry(() => 3)()).toBe(3);
  });

  it("should curring a single argument function", () => {
    expect(curry((i) => i)(3)).toBe(3);
  });

  it("should curring a couple of arguments", () => {
    expect(curry((a,b) => a+b)(1)(2)).toBe(3);
  });

  it("should also not curring a couple of arguments", () => {
    expect(curry((a,b) => a+b)(1,2)).toBe(3);
  });

  it("should also curring a ternary", () => {
    expect(curry((a,b,c) => a+b+c)(1)(1)(1)).toBe(3);
  });

  it("should also curring a ternary with a partial application", () => {
    expect(curry((a,b,c) => a+b+c)(1,1)(1)).toBe(3);
  });

  it("should also not curring a ternary", () => {
    expect(curry((a,b,c) => a+b+c)(1,1,1)).toBe(3);
  });

  it("should also curring a function with more arguments", () => {
    expect(curry((a,b,c,d,e) => a+b+c+d+e)(1)(1)(1)(1)(1)).toBe(5);
  });

  it("should also curring a function with a partial application", () => {
    expect(curry((a,b,c,d,e) => a+b+c+d+e)(1,1,1)(1)(1)).toBe(5);
  });

  it("should also curring a function with multiple partial applications", () => {
    expect(curry((a,b,c,d,e) => a+b+c+d+e)(1,1)(1,1)(1)).toBe(5);
  });

  it("should also curring a function with multiple partial applications in between", () => {
    expect(curry((a,b,c,d,e) => a+b+c+d+e)(1,1)(1)(1,1)).toBe(5);
  });

  it("should not curring a function with multiple arguments", () => {
    expect(curry((a,b,c,d,e) => a+b+c+d+e)(1,1,1,1,1)).toBe(5);
  });

  it("should curring a function with a big partial application", () => {
    expect(curry((a,b,c,d,e) => a+b+c+d+e)(1,1,1,1)(1)).toBe(5);
  });

  it("should curring a function with a reverse partial application", () => {
    expect(curry((a,b,c,d,e) => a+b+c+d+e)(1)(1,1,1,1)).toBe(5);
  });

  it("should return an immutable function", () => {
    const sub = (a,b)=>a-b;

    const curriedSub = curry(sub);

    // force multiple calls
    [1,2,3,4,5,6,7,8,9,10].map(curriedSub)

    expect(typeof curriedSub(1)).toBe('function');
    expect(curriedSub(3)(1)).toBe(2);
  });
});
