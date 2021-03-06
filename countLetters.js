const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (string) {
  string = string.replace(/\s/g, '');
  let container = {};
  for (let item of string) {
    if (container[item]) {
      container[item] += 1;
    } else {
      container[item] = 1;
    }
  }
  return container;
};

console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));