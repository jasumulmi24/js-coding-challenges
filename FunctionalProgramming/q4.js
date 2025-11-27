// Write findById(arr, id) using find() only

function findById(arr, id){
   const result = arr.find(item => item.id == id);
   console.log(result);
}

findById([{"id": 1, "age" : 20}, {"id": 2, "age" : 21},{"id": 3, "age" : 22}], 2);