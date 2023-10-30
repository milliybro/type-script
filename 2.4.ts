let strIsCapitalize = "Abdulaziz Programmer Is FullStack Developer";

const checkWordCapitalize = (str:string):boolean=>{
  let arr = str.split(" ");
  for(let el of arr){
    if(el[0]!==el[0].toUpperCase()){
      return false
    }
  }
  return true
}

console.log(checkWordCapitalize(strIsCapitalize));