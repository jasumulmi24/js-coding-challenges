// Write a function filterTruthy(arr) that returns only truthy values. Do not use Boolean()
// —use an if condition.

function filterTruthy(arr){
    const newArr = [];
    for(var item of arr){
     const itemType = typeof(item);
     if (
            (itemType=== "number" && item !== 0 && !isNaN(item)) ||
            (itemType === "boolean" && item === true) ||
            (itemType === "string" && item) ||          
            (itemType === "object" && item !== null)   
        ) { newArr.push(item);}
   }
   console.log(newArr);
}
const arr = [false, 0, "",  NaN, true, 2, null, undefined, -3];
filterTruthy(arr);