// Given an array, perform these operations in order:
// push(10)
// unshift(5)
// pop()
// Splice at index 1, remove 1 item
// Return the final array

let arr  = [1,2,3,4];

arr.push(10);
arr.unshift(5);
arr.pop();
arr.splice(1,1);
console.log(arr);

