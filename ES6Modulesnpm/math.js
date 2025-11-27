
// Create a file math.js exporting add() and sub() (named exports). Import them in 
// main.js and use them.

export function add(){
   const a = 2, b= 3;
   console.log(a+b);
}
export function sub(){
   const a = 4, b= 3;
   console.log(a-b);
}