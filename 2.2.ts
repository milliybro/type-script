let arrName = ["Abdulaziz", "Murod", "Yulduz", "Abduga’ffor", "Jamila"];

const getLongestWord = (arr:string []):string => {
  let max = arr[0];

  for(let el of arr){
    if(el.length>max.length){
      max = el;
    }
  }
  return max
};

console.log(getLongestWord(arrName));