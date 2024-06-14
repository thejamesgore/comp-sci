export function bubbleSort(array) {
  let animations = []
  let n = array.length
  let arr = array.slice()
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        animations.push([j, j + 1])
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return animations
}
