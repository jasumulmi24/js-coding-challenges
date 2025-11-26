// Inside a function, declare variables using var , let and const . Log their
// accessibility inside and outside blocks.
// Expected: Demonstrate block scope vs. function scope.

function variableScopeDemo(){
    if(true){
       var  a = 3;
       let b = 12; const c = 5;
        console.log("value of a:",a); // output: Value of a: 3
        console.log("Value of b:",b); // output: Value of b: 12 
        console.log("Value of c:",c); // output: Value of c: 5 
    }
    console.log("value of a:",a); // output: Value of a: 3
   // console.log("Value of b:",b); // Uncaught ReferenceError: b is not defined
    //console.log("Value of c:",c); //Uncaught ReferenceError: c is not defined
}
 //console.log("value of a:",a); // Uncaught ReferenceError: a is not defined
variableScopeDemo();