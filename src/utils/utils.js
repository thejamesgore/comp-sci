// utils/arrayUtils.js

export const generateRandomArray = (arraySize) => {
  return Array.from({ length: arraySize }, () =>
    Math.floor(Math.random() * 100)
  )
}
