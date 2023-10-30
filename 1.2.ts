// Elementlari musbat butun sonlardan iborat bolgan arr nomli massiv berilgan. Eng kop xonali sonni chiqaruvchi getHighestNumberOfDigits(arr) nomli funksiya hosil qiling.

let arr: number[] = [1589, 31851, 512, 180975, 78];

function getHighestNumberOfDigits(input: number[]): number {
  let longNumber: number = arr[0];
  for (let el of input) {
    if (el > longNumber) {
      longNumber = el;
    }
  }
  return longNumber;
}

let resp = getHighestNumberOfDigits(arr);
console.log(resp);