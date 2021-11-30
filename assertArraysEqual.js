const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Array Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`❌ ❌ ❌ Array Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

module.exports = assertArraysEqual;