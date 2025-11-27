// Given: \[1, 2, 3, 4\]
// Use map → filter → reduce to compute the sum of squares of even numbers.
// Should result in: (2² + 4²) = 20 


function sumOfSquares(arr){
    const result = arr
            .map(item=> item * item)
            .filter(item => item % 2 == 0)
            .reduce( (acc , item) => acc + item, 0);
    console.log(result);
}


sumOfSquares([1,2,3,4]);