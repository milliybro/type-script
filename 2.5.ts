let strCount = "Abdulaziz Programmer";

const getCharCountObj = (str:string):object =>{
  let res:object = {};
  for(let i of str){
    if(Object.keys(res).includes(i)){
      res[i]+=1;
    }else{
      res[i]=1;
    }
  }

  return res
}

console.log(getCharCountObj(strCount));