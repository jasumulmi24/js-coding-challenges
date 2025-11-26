// Write getDayName(num) using switch-case .
// Input: 3 → Output: "Wednesday"
// Include one intentional fall-through case.

function getDayName(num){
    switch(num){
        case 0:
             console.log('Sunday');
             break;
        case 1:
        case 2:
        console.log('Tuesday');
        break;
        case 3:
        console.log('Wednesday');
        break;
        default: 
        console.log("Saturday");
        break;

    }
}

getDayName(0);
getDayName(1);
getDayName(2);
getDayName(3);
