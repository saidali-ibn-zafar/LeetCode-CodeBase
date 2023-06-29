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

// - - - - -

const isOneBitCharacter = (bits) => {
    let len = bits.length;
    let i = 0;

    while (i < len - 1) {
        if (bits[i] === 0) {
            i += 1;
        } else {
            i += 2;
        }
    }

    return i === len - 1;
}

// - - - - - 

const addDigits = (num) => {
    let res;
    do {
        res = num.toString().split("").reduce((acc, curr) => acc + Number(curr), 0);
        num = res
    } while (res >= 10)
    return res;
};

// - - - - - 

const isAnagram = (s, t) => {
    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");

    return (sortedS === sortedT)
};

// - - - - - 

const missingNumber = (nums) => {
    const sortedNums = nums.sort((a, b) => a - b);
    const len = nums.length;

    for (let i = 0; i <= len; i++) {
        if (sortedNums[i] !== i) {
            return i;
        }
    }
};

// - - - - - 

const generate = (numRows) => {
    let pascalsTriangle = new Array(numRows);

    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1);
        row[0] = 1;
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            let rowAbove = pascalsTriangle[i - 1];
            row[j] = rowAbove[j] + rowAbove[j - 1];
        }
        pascalsTriangle[i] = row;
    }
    return pascalsTriangle;
};

// - - - - - 

const arraySign = (nums) => {
    const res = nums.reduce((acc, curr) => acc * curr);
    if (res > 0) {
        return 1;
    }
    else if (res < 0) {
        return -1
    }
    else {
        return 0;
    }
};

// - - - - - 

const kidsWithCandies = (candies, extraCandies) => {
    const extraAddedArr = candies.map(el => el + extraCandies);
    const max = Math.max(...candies);
    let boolRes = [];
    for (let i = 0; i < candies.length; i++) {
        if (extraAddedArr[i] >= max) {
            boolRes.push(true);
        }
        else {
            boolRes.push(false);
        }
    }
    return boolRes;
};
