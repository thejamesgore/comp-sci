// implement the other algos later on and add any to your switch and control panel

export type Animation = [number, number, 'compare' | 'swap' | 'overwrite']

export const bubbleSort = (array: number[]): Animation[] => {
  let animations: Animation[] = []
  let n = array.length
  let arr = array.slice()

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Record the comparison
      animations.push([j, j + 1, 'compare'])
      if (arr[j] > arr[j + 1]) {
        // Record the swap
        animations.push([j, j + 1, 'swap'])
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return animations
}

export const selectionSort = (array: number[]): Animation[] => {
  let animations: Animation[] = [];
  let arr = array.slice();
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) { 
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      // Record the comparison
      animations.push([minIdx, j, 'compare']);
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      // Record the swap
      animations.push([i, minIdx, 'swap']);
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
  return animations;
};

export const mergeSort = (array: number[]): Animation[] => {
  let animations: Animation[] = [];
  if (array.length <= 1) return animations;
  let auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
};

const mergeSortHelper = (
  mainArray: number[],
  startIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: Animation[]
) => {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
};

const doMerge = (
  mainArray: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: Animation[]
) => {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    // Record the comparison
    animations.push([i, j, 'compare']);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // Record the overwrite
      animations.push([k, auxiliaryArray[i], 'overwrite']);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // Record the overwrite
      animations.push([k, auxiliaryArray[j], 'overwrite']);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // Record the comparison (redundant, but for consistency)
    animations.push([i, i, 'compare']);
    // Record the overwrite
    animations.push([k, auxiliaryArray[i], 'overwrite']);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // Record the comparison (redundant, but for consistency)
    animations.push([j, j, 'compare']);
    // Record the overwrite
    animations.push([k, auxiliaryArray[j], 'overwrite']);
    mainArray[k++] = auxiliaryArray[j++];
  }
};