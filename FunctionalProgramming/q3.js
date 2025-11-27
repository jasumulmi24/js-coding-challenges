// Given array: \["apple", "banana", "apple"\]
// Write countWords(arr) using reduce() to return:
// \{ apple: 2, banana: 1 \}


function countWords(arr) {
  const result =  arr.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
  console.log(result);
}
countWords(["apple", "banana", "apple"]);