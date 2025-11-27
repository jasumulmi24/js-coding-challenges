// Write a function where inserting debugger helps inspect loop execution.


function iterateLoop(arr){
    for(const item of arr){
        debugger
        console.log(item);
    }
}

iterateLoop([1,2,3,4]);