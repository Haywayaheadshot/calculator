const Operator = require('./Constructor.js');

describe('Additions', () => {
  test('should add the input integers', () => {
    const result = Operator.addition(1, 2);
    expect(result).toBe(3);
  });

  test('should add the input integers', () => {
    const result = Operator.addition(2, 3);
    expect(result).toBe(5);
  });

  test('should add the input integers', () => {
    const result = Operator.addition(10, 3);
    expect(result).toBe(13);
  });
});

describe('Subtractions', () => {
  test('should subtract the second input integer from the first', () => {
    const result = Operator.subtraction(1, 2);
    expect(result).toBe(-1);
  });

  test('should subtract the second input integer from the first', () => {
    const result = Operator.subtraction(2, 3);
    expect(result).toBe(-1);
  });

  test('should subtract the second input integer from the first', () => {
    const result = Operator.subtraction(10, 3);
    expect(result).toBe(7);
  });
});

describe('Multiplications', () => {
  test('should multiply two integers', () => {
    const result = Operator.multiplication(1, 2);
    expect(result).toBe(2);
  });

  test('should multiply two integers', () => {
    const result = Operator.multiplication(2, 3);
    expect(result).toBe(6);
  });

  test('should multiply two integers', () => {
    const result = Operator.multiplication(10, 3);
    expect(result).toBe(30);
  });
});

describe('Division', () => {
  test('should divide first integer by second integer', () => {
    const result = Operator.division(1, 2);
    expect(result).toBe(0.5);
  });

  test('should divide first integer by second integer', () => {
    const result = Operator.division(6, 3);
    expect(result).toBe(2);
  });

  test('should divide first integer by second integer', () => {
    const result = Operator.division(30, 3);
    expect(result).toBe(10);
  });
});