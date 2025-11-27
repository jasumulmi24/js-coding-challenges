// Write addAsync(a, b) that returns a Promise resolving with the sum in 1 second.

function addAsync(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000); // 1 second
  });
}


addAsync(4,5).then(x=> {
    console.log(x);
})



