// Ushbu ifodani hisoblovchi getSum(n) nomli funksiya tuzing.

function getSum(n: number): number {
  let odd: number = 1;
  let even: number = 1;
  for (let i:number = 1; i <= n * 2; i++) {
    if (i % 2 == 0) {
      even *= i;
    } else {
      odd *= i;
    }
  }
  return odd + even;
}
let res = getSum(3);
console.log(res);
