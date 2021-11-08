function leftAndRightSum(args) {
  let n = Number(args[0]);
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 1; i <= n; i++) {
    let currentNum = Number(args[i]);
    leftSum += currentNum;
  }
  for (let i = n + 1; i <= 2 * n; i++) {
    let currentNum = Number(args[i]);
    rightSum += currentNum;
  }
  if (leftSum == rightSum) {
    console.log(`Yes, sum = ${leftSum}`);
  } else {
    console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`);
  }
}

leftAndRightSum([2, 10, 90, 60, 40]);
leftAndRightSum([2, 90, 9, 50, 50]);
