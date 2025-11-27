// Input:
// \{ firstName: "John", address: \{ city: "Kathmandu" \} \}
// Extract firstName as name and nested city .

const input = {
  firstName: "John",
  address: { city: "Kathmandu" }
};

const { firstName: name, address: { city } } = input;

console.log(name); // "John"
console.log(city); // "Kathmandu"

