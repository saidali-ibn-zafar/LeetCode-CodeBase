var isPalindrome = function (x) {
  var result = x.toString().toLowerCase();
  result = result === result.split("").reverse().join("");
  return result;
};

// - - - - -

var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};

// - - - - -

var argumentsLength = function (...args) {
  return args.length;
};

// - - - - -

var maximizeSum = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let sum = 0;
  let lastEl;
  for (let i = 1; i <= k; i++) {
    lastEl = nums.pop();
    sum += lastEl;
    nums.push(lastEl + 1);
  }
  return sum;
};

// - - - - -

var once = (fn) => {
  let hasBeenCalled = false;
  let res;
  return (...args) => {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      res = fn(...args);
      return res;
    }

    return undefined;
  };
};

// - - - - -

var createHelloWorld = () => {
  return (...args) => {
    return "Hello World";
  };
};
