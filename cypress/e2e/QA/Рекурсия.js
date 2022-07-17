
  // Visualize Execution: https://goo.gl/UlTxCs
const sequenceSum = (begin, end) => {
    console.log('begin', begin)
    console.log('end', end)
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin;
    }
    const result = begin + sequenceSum(begin + 1, end);
    console.log(result)
  return result
};

console.log(sequenceSum(2, 5));