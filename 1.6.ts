// Berilgan obj nomli obyektning kalitlari va qiymatlari yig'indisidan iborat massiv qaytaruvchi changeObjToArr(obj) nomli funksiya tuzing.

type givenObject = {
  [el: string]: number;
}

let obj: givenObject = { a: 1, b: 2, c: 3 };

function changeObjToArr(input: givenObject): string[] {
  let value: string[] = [];
  let keys: string[] = Object.keys(input);

  for (let el of keys) {
    value.push(el + input[el])
  }
  return value;
}
console.log(changeObjToArr(obj));