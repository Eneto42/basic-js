const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let doubleNext = '--double-next'
  let doublePrev = '--double-prev'
  let discardPrev = '--discard-prev'
  let discardNext = '--discard-next'
  if (Array.isArray(arr)) {
    return arr.reduce((previousValue, currentValue, i, array) => {
      switch (currentValue) {
        case doubleNext:
          if (array[i + 1]) previousValue.push(array[i + 1])
          break
        case doublePrev:
          if (i - 1 > 0 && typeof array[i - 1] == 'number') previousValue.push(array[i - 1])
          break
        case discardNext:
          array.splice(i + 1, 1)
          break
        case discardPrev:
          if (i - 1 > 0 && typeof array[i - 1] == 'number') previousValue.pop()
          break
        default: previousValue.push(currentValue)
      }
      return previousValue
    }, [])
  } 
  throw new Error("'arr' parameter must be an instance of the Array!")

}

module.exports = {
  transform
};
