// Write a function createCounter() that returns:
// increment() → increments count
// get() → returns current count
// Must use closure, not global variables.

function createCounter(){
    let counter =0;
    return function increment(msg){
        counter++
        console.log(counter)
    }
}

const get = createCounter();

get();
get();
get();
get();
get();