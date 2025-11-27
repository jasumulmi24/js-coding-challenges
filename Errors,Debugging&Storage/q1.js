// Write validateAge(age) that throws InvalidAgeError if age < 0
function validateAge(age) {
  if (age < 0) {
    throw new Error("InvalidAgeError");
  }
}


validateAge(0);
validateAge(18);
validateAge(-2);