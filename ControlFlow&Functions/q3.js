// Write reverseArray(arr) that builds a reversed array without using the built-in 
// reverse() method. Use for…of .

function reverseArray(arr){
  const reversearr = [];
    for(const item of arr){
        reversearr.unshift(item);
  }
  console.log(reversearr);
}

reverseArray([1,2,3,4,5]);