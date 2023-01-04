import '@testing-library/jest-dom';

test('insertion sort works correctly', () => {
  const arr = [8, 4,22, 42, 16, 15];
  const n = [4, 8, 15, 16, 22, 42];

  insertionSort(arr, n);

  expect(arr).toEqual(sortedArr);
});
