// Write a function divide(a, b) that returns "Invalid" if division is not possible (e.g.,
// dividing by 0 or passing non-numbers). Use explicit type conversion for input
// validation.

function divide(a,b){
  if ([a, b].includes("") || [a, b].includes(null)) return "Invalid";
  const numerator = Number(a);
  const denominator = Number(b);
   if(isNaN(numerator) || isNaN(denominator) || denominator == 0){
    return "Invalid";
   }
}

console.log(divide(0,50)); //valid
console.log(divide(100,50)); //valid
console.log(divide(100,0));//invalid
console.log(divide(100,"2"));//valid
console.log(divide(100,"some value"));//invalid
console.log(divide(100,""));//invalid
console.log(divide("",50));//invalid
console.log(divide("some value",100)); //invalid
console.log(divide("100",100));//valid
console.log(divide("100","0"));//invalid
console.log(divide(null,"0"));//invalid
console.log(divide(52,null));//invalid
 