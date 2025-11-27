// Write squareAll(arr) using map() only.
// Input: [1, 2, 3] → Output: [1, 4, 9]


function squareAll(arr){
    const MappedArray = arr.map(item => item * item);
    console.log(arr);
    console.log(MappedArray);
}

squareAll([1, 2, 3]);
