const assert = require('assert');

const justifier = function(text, width) {
  let spaceWidth = width - text.length;
  return text + new Array(spaceWidth).fill(' ').join('');
}

const logTestCase = function(args) {
  let message = '';
  message = message + justifier(getSerialNumber().toString(), 4) + '|';
  message = message + justifier(args.message.toString(), 30) + '|';
  message = message + justifier(args.input.toString(), 15) + '|';
  message = message + justifier(args.expectedOutput.toString(), 15) + '|';
  message = message + justifier(args.actualOutput.toString(), 15) + '|';
  incrementSerialNo();
  return message;
}

const serialNumber = {
  number: 1
}

let getSerialNumber = function() {
  return serialNumber.number;
}

let incrementSerialNo = function() {
  return serialNumber.number++;
}

const assertEqual = function(object) {
  try {
    assert.equal(object.actualOutput, object.expectedOutput);
    console.log("\x1b[32m", logTestCase(object) + justifier("Success", 10) + '|');
  } catch (err) {
    console.log("\x1b[31m", logTestCase(object) + justifier("Failed", 10) + '|');
  }
}

const assertDeepEqual = function(object) {
  try {
    assert.deepEqual(object.actualOutput, object.expectedOutput);
    console.log("\x1b[32m", logTestCase(object) + justifier("Success", 10) + '|');
  } catch (err) {
    console.log("\x1b[31m", logTestCase(object) + justifier("Failed", 10) + '|');
  }
}

exports.assertEqual = assertEqual;
exports.assertDeepEqual = assertDeepEqual;
