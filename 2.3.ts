let arrNumber = [2, 5, 7, 10, 0, 18, 15];

const getDividers = (arr:number[],n:number):number[] =>{
  let res:number[]=[]
  for(let el of arr){
    if(el%5===0){
      res.push(el);
    }
  }
  return res;
}

console.log(getDividers(arrNumber,5));