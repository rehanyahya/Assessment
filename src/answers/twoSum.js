export default function twoSum(numbers, target) {
  let ptLeft = 0,
    ptRight = numbers.length - 1;
  while (ptLeft < ptRight) {
    const sum = numbers[ptLeft] + numbers[ptRight];
    if (sum === target) {
      return [ptLeft + 1, ptRight + 1];
    }

    if (sum > target) {
      ptRight -= 1;
    } else {
      ptLeft -= 1;
    }
  }
  return [-1, -1];
}

//[2, 7, 11, 15]
//9
