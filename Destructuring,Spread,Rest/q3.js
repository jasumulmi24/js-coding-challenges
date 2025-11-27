
// Write sum(...nums) that returns the sum of unlimited numbers.

function sum(...nums){
 const total = nums.reduce((a,b)=> a+b,0);
 console.log(total);
}

sum(2,3);
sum(1,2,3);
sum(2,3,4,5);
sum(2,3,4,5,6);
