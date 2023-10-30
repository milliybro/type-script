let strCountt = "Abdulaziz Programmer";
let char = "a";

String.prototype.count = (char: string) => {
  let arr = this
  arr = arr.split("");
  let res = 0;
  for (let el in arr) {
    if (el === char) {
      res++;
    }
  }
  return res;
};

interface String {
  count(char: string): number;
}

console.log(strCountt.count(char));