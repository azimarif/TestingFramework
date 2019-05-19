const assert = require('assert');
const {assertEqual} = require('./testLibrary.js');

const addSum = function(num1, num2) {
  return num2 + num1;
}

let object1 = { input : [1,2], expectedOutput : 3, actualOutput : addSum(1,2), message : 'Test for input' }
let object2 = { input : [1,3], expectedOutput : 5, actualOutput : addSum(1,3), message : 'Test for input' }
let object3 = { input : [1,5], expectedOutput : 6, actualOutput : addSum(1,5), message : 'Test for input' }
let object4 = { input : [1,1], expectedOutput : 2, actualOutput : addSum(1,1), message : 'Test for input' }
let object5 = { input : [1,8], expectedOutput : 8, actualOutput : addSum(1,8), message : 'Test for input' }
let object6 = { input : [1], expectedOutput : 1, actualOutput : addSum(1), message : 'Test for input' }

assertEqual(object1);
assertEqual(object2);
assertEqual(object3);
assertEqual(object5);
assertEqual(object6);
assertEqual(object4);
