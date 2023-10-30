let objChange = { a: 1, b: 2, c: 3 };

const changeObjToString = (obj: object): string => {
  let res = "";
  for (let i in obj) {
    res += i + obj[i];
  }
  return res;
};

console.log(changeObjToString(objChange));