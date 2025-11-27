// Write a function that takes an array of 3 numbers and returns:
// First element 
// Third element
// Default value = 0 if missing


function  numbers(arr){
const [ a= 0, , b=0] = arr;
console.log(a,b);
}

numbers([1,2,3]);
numbers([1,3]);
numbers([,2,3]);
