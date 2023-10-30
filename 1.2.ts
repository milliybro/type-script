// Elementlari musbat butun sonlardan iborat bolgan arr nomli massiv berilgan. Eng kop xonali sonni chiqaruvchi getHighestNumberOfDigits(arr) nomli funksiya hosil qiling.

function getHighestNumberOfDigits(arr: number[]): void {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (max < el) {
      max = el;
    }
  }
  console.log(max);
}

let arr = [1589, 31851, 512, 180975, 78];

getHighestNumberOfDigits(arr);