const { calc } = require('../app');

test('calc returns -1 for odd sums', () => {
  expect(calc(3, 3, 3)).toBe(-1);
});

test('calc returns half the sum for even sums', () => {
  expect(calc(2, 2, 2)).toBe(3);
  expect(calc(4, 4, 4)).toBe(6);
});

test('calc handles edge cases correctly', () => {
  expect(calc(0, 0, 0)).toBe(0);
  expect(calc(30, 30, 30)).toBe(45);
});
