// Write getUsers() that fetches users from JSONPlaceholder and returns an array
// of names.

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data.map(user => user.name);
}

// Usage
getUsers().then(names => console.log(names));
