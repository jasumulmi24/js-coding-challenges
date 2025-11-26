// Write sumAll(...nums) that returns the sum of unlimited input values.
function sumAll(...nums){
    let sum = 0;
  for(const item of nums){
        sum += item;
  }
  console.log(sum);
}


sumAll(2,3);
sumAll(1,3,3,5,6);
sumAll(2,3,4,8,5);
sumAll(2,3,8,10,15);