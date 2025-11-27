
function createUser(id, name, age){
    const user ={
        ["user_id"] : id,
        ["user_name"] : name,
        ["user_age"] : age
    }
console.log(user);
}




const id = 1, name = "sita", age= 33;
createUser(id, name, age);