// Write getUser(id) using async/await to fetch user data. Wrap in try/catch . If fetch fails,
// return "Error" .


async function getUser(id) {debugger
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=> res.json());
    console.log('Result:', result);
  } catch (error) {
    console.error("Error");
  }
}


 getUser(1);
