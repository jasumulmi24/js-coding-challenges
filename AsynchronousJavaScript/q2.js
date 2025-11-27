// Write code that logs numbers 1–5 every second using setInterval . Stop
// automatically after reaching 5.
let counter = 0;
const intervalId = setInterval(() => {
    counter = counter +1;
    console.log(counter); 
    if(counter == 5) { 
       clearInterval(intervalId) 
    }
    
}, 1000);

  



