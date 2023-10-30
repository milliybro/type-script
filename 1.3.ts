// arr nomli massiv turli xil elementlardan tashkil topgan. Elementlari ichidan turi faqat string bo'lgan elementlarni massiv qilib qaytaradigan getStringArr(arr) nomli funksiya yozing.

function getStringArr(arr: any): string[] {
  let res: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (typeof el == "string") {
      res.push(el);
    }
  }
  return res;
}

let arr1 = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];

console.log(getStringArr(arr1));