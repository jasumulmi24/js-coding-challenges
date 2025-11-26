// Write getGrade(score) using if/else :
// 90–100 → "A"
// 80–89 → "B"
// …
// Return "Invalid" for out-of-range values.

function getGrade(score){
    if(score >= 90 && score <= 100){
        return "A";
    }
    if(score >= 80 && score < 90){
        return "B";
    }
    if(score >=70  && score < 80){
        return "C";
    }
    if(score >= 60 && score < 70){
        return "D";
    }
    if(score >= 0 && score < 60){
        return "F";
    }
    else{
        return "Invalid";
    }
}

console.log(getGrade(88));
console.log(getGrade(101));
console.log(getGrade(0));
console.log(getGrade(-56));
console.log(getGrade(40));
console.log(getGrade(89));
console.log(getGrade(55));