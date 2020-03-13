module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, allDepths = []) {
    allDepths.push(depth);
    arr.forEach(element => {
      if (Array.isArray(element)) {
        this.calculateDepth(element, depth + 1, allDepths)
      }
    });
    return Math.max(...allDepths);
  }
};