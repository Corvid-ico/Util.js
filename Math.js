//Math.js
exports.Sqrt = (x) => {
  if (x < 2) {
    return x;
  }
  let leftBoundary = 1; let rightBoundary = Math.floor(x / 2);
  while (leftBoundary <= rightBoundary) {
    const midpoint = Math.floor((leftBoundary + rightBoundary) / 2); const midpointSq = midpoint * midpoint;
    if (midpointSq === x) {
      return midpoint;
    } else if (midpointSq < x) {
      leftBoundary = midpoint + 1;
    }  else {
      rightBoundary = midpoint - 1;
    }
  }
  return rightBoundary;
}

exports.e = (x) => {
  let sum = 1;
  let term = 1;
  for (let i = 1; i <= 100; i++) {
    term *= x / i;
    sum += term;
  }
  return sum;
}
