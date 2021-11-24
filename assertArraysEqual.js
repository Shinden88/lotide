const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2)
  if (!result) {
    console.log(`❌ ❌ ❌: Uh Oh! These arrays are NOT equal`)
  }
  else {
    console.log(`✅ ✅ ✅ : Congratulations! These arrays ARE equal`)
  }
}
module.exports = assertArraysEqual;