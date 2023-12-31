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

// - - - - - 

const canConstruct = (ransomNote, magazine) => {
    const a = Array.from(ransomNote);
    const b = Array.from(magazine);
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                b.splice(j, 1);
                counter++;
                break;
            }
        }
    }
    return counter === a.length;
};

console.log(canConstruct("ap", "prague"));

// - - - - -

const maximumNumberOfStringPairs = (words) => {
    let counter = 0;
    words = words.map(el => Array.from(el).sort().join(""));

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i] === words[j]) {
                counter++
            }
        }
    }
    return counter;
};

// - - - - - 

// 509. Fibonacci Number
const fib = (n) => {
  if (n === 0) {
    return n;
  }
  else if (n === 1) {
    return n
  }

  return fib(n - 1) + fib(n - 2);
};

// - - - - - 

// 2729. Check if The Number is Fascinating
const isFascinating = (n) => {
  if (n.toString().includes("0")) {
    return false;
  }

  let output = "";
  for (let i = 1; i <= 3; i++) {
    output += i * n;
  }

  const madeArr = Array.from(output);
  if (!madeArr.includes("0") && madeArr.sort().join("") === "123456789") {
    return true;
  }

  return false;
};

// - - - - - 

// 125. Valid Palindrome
const isPalindrome = (s) => {
    const alphanumericString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    return (alphanumericString.split("").reverse().join("") === alphanumericString)
};

// - - - - - 

// 1051. Height Checker
const heightChecker = (heights) => {
    const sortedArr = [...heights].sort((a, b) => a - b);
    let counter = 0;
    for (let i = 0; i < heights.length; i++) {
        if(heights[i] !== sortedArr[i]){
            counter++;
        }
    }
    return counter;
};

// - - - - - 

// 1046. Last Stone Weight
/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
    let sortedStones = [...stones].sort((a, b) => a - b);

    while (sortedStones.length > 1) {
        let max1 = sortedStones.pop();
        let max2 = sortedStones.pop();
        let result = max1 - max2;
        sortedStones.push(result);
        sortedStones.sort((a, b) => (a - b));
    }

    return sortedStones[0];
};

 // - - - - - 

// 860. Lemonade Change
/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = (bills) => {
    const fives = [];
    const tens = [];

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fives.push(5);
        } else if (bills[i] === 10) {
            if (!fives.length) return false;
            fives.pop();
            tens.push(10);
        } else {
            if (tens.length && fives.length) {
                fives.pop();
                tens.pop();
            } else if (!tens.length && fives.length >= 3) {
                fives.splice(0, 3);
            } else {
                return false;
            }
        }
    }
    return true;
};

// - - - - - 

// 744. Find Smallest Letter Greater Than Target
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
    letters = letters.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < letters.length; i++) {
        // not <, it should be >, because f is greater then c, it is just an example
        if (letters[i] > target) {
            return letters[i];
        }
    }

    return letters[0];
};

// - - - - - 

// 1331. Rank Transform of an Array
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = (arr) => {
    const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);
    return arr.map((x) => sortedArr.indexOf(x) + 1);
};

// - - - - - 

// 73. Set Matrix Zeroes
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeroes = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const zeroRows = [];
  const zeroColumns = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.push(i);
        zeroColumns.push(j);
      }
    }
  }

  for (let row of zeroRows) {
    matrix[row].fill(0);
  }

  for (let column of zeroColumns) {
    for (let i = 0; i < rows; i++) {
      matrix[i][column] = 0;
    }
  }
};
