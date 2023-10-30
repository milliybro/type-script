// str nomli satrdagi katta harflarni kichigiga kichiklarini kattasiga almashtiruvchi switchLetters(str) nomli funksiya tuzing.


let stringValue: string = "Abdulaziz Programmer";

function switchLetters(input: string): string {
  let value: string = "";
  for (let string of input) {
    if (string === string.toUpperCase()) {
    value += string.toLowerCase();
    } else {
    value += string.toUpperCase();
    }
  }
  return value;
}

let qiymat: string = switchLetters(stringValue);
console.log(qiymat);