

function safeParse(jsonStr){
  try {
    const parseJson = JSON.parse(jsonStr);
    return parseJson;
  } catch (error) {
    return "Invalid JSON";
  }
}

const jsonStr  = '{"id": 1, "address" : "ktm", "age" : 20}';
console.log(safeParse(jsonStr));