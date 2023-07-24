
// 75. Sort Colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    let red = [], white = [], blue = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            red.push(0);
        }
        else if (nums[i] === 1) {
            white.push(1);
        }
        else if (nums[i] === 2) {
            blue.push(2);
        }
        else {
            throw new Error("Wrong value!");
        }
    }

    const sortedArr = red.concat(white, blue)
    for (let j = 0; j < sortedArr.length; j++) {
        nums[j] = sortedArr[j];
    }

    console.log(nums);
};

// - - - - - - 

// 73. Set Matrix Zeroes

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeroes = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const zeroInRows = [];
  const zeroInColumns = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        zeroInRows.push(i);
        zeroInColumns.push(j);
      }
    }
  }

  for (let row of zeroInRows) {
    matrix[row].fill(0);
  }

  for (let column of zeroInColumns) {
    for (let i = 0; i < rows; i++) {
      matrix[i][column] = 0;
    }
  }
};
