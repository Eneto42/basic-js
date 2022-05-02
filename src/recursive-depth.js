const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let calc = 0;
    if (Array.isArray(arr)) {
      for (let i of arr) {
        calc = Math.max(calc, this.calculateDepth(i))
      }
      return calc + 1
    } return 0
  }
}

module.exports = {
  DepthCalculator
};
