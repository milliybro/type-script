// Ushbu ifodani hisoblovchi getSum(n) nomli funksiya tuzing.

const getSum = (n: number): number => {
  let res = 1;
  let res1 = 1;
  for (let i = 1; i <= n; i++) {
    res *= 2 * i - 1;
    res1 *= 2 * i;
  }
  return res + res1;
};

console.log(getSum(3));