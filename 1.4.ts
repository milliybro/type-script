// Quyidagi str nomli satrdagi tinish belgilari sonini topuvchi getPunctuationNumber(str) dastur tuzing.

let str: string = "Hello! How are you? I'm doing great. What's new?"
const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];

function getPunctuationNumber(input: string):number | string {
  let count: number = 0;
  for (let el of input) {
    if (punctuationSigns.includes(el)) {
      count++;
    }
  }
  return count + " ta";
}
let value = getPunctuationNumber(str);
console.log(value);