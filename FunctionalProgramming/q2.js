
// Write filterAdults(users) using filter() , where age ≥ 18.
// Input: \[\{name:"A", age:17\}, \{name:"B", age:20\}\]
// Output: \[\{name:"B", age:20\}\]


function filterAdults(users){
  const result =  users.filter(user => {
    return user.age >= 18;
  })
  console.log(result);
}
 filterAdults([{name:"A", age:17} , {name:"B", age:20}]);