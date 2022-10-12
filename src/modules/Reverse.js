const reverseStr = (str) => {
  const result = str.split('').reverse().join('');
  return result;
};

module.exports = reverseStr;