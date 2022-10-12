const reverseStr = require('./Reverse.js');
const capitalize = require('./Capitalize.js');
const stringLength = require('./StringLength.js');

test('should capitalize the first letter of a string', () => {
  const task = capitalize('hello');
  expect(task).toBe('Hello');
});

test('Check if input is a string', () => {
  expect(capitalize(1)).toBe('It is not a string');
});

test('Reverse string', () => {
  expect(reverseStr('hello')).toBe('olleh');
});

test('Check length of string', () => {
  expect(stringLength('Ghana')).toBe(5);
});

test('Check length of string', () => {
  expect(stringLength('')).toBe('The string must have 1 to 9 characters');
});