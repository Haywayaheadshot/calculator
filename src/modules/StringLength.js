const stringLength = (string) => {
  if (string.length < 10 && string.length > 0) {
    return string.length;
  }
  return 'The string must have 1 to 9 characters';
};

module.exports = stringLength;