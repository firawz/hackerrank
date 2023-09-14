function extraLongFactorials(n) {
  // Write your code here
  let res = BigInt(1);
  for (let i = 2n; i <= n; i++) {
    res *= i;
  }

  console.log(res);
  return res;
}

extraLongFactorials(30);
