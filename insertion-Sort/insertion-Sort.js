function insertionSort(arr, n) {
  {
    let i, a, j;
    for (i = 1; i < n; i++) {
      a = arr[i];
      j = i - 1;

      while (j >= 0 && arr[j] > a) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = arr[j];

      j = j - 1;
    }
    arr[j + 1] = a;
  }
}

insertionSort(arr, n);

