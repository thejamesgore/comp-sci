// implement the other algos later on and add any to your switch and control panel

export const bubbleSort = (array) => {
  let animations = []
  let n = array.length
  let arr = array.slice()

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Record the comparison
      animations.push([j, j + 1, false])
      if (arr[j] > arr[j + 1]) {
        // Record the swap
        animations.push([j, j + 1, true])
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return animations
}

export const selectionSort = (array) => {
  let animations = []
  let arr = array.slice()
  let n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j < n; j++) {
      animations.push([i, j, false])
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    if (minIdx !== i) {
      animations.push([i, minIdx, true])
      let temp = arr[i]
      arr[i] = arr[minIdx]
      arr[minIdx] = temp
    }
  }
  return animations
}

export const mergeSort = (array) => {
  let animations = []
  return animations
}

export const quickSort = (array) => {
  let animations = []
  return animations
}
