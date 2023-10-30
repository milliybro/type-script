// arr nomli massiv turli xil elementlardan tashkil topgan. Elementlari ichidan turi faqat string bo'lgan elementlarni massiv qilib qaytaradigan getStringArr(arr) nomli funksiya yozing.

let array = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}]

function getStringArr(input: any[]): string[] {
  let stringValue: string[] = [];
  for (let string of input) {
    if (typeof string === "string") {
      stringValue.push(string)
    }
  }
  return stringValue;
}
let response = getStringArr(array);
console.log(response);