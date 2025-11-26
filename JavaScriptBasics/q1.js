function checkTypes(values){debugger
  const valuesType = [];
  for (const value of values) {
  valuesType.push(typeof(value));
}
console.log(valuesType);
}

const values = [1, "a", true, null, undefined];
checkTypes(values);

