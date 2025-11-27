// Fetch these two URLs in parallel using Promise.all() and return a combined array:
// https://jsonplaceholder.typicode.com/users



const fetchApi1 = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json());
const fetchApi2 = fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json());


Promise.all([fetchApi1,fetchApi2]).then(([users, posts]) => {
    console.log(users);
    console.log(posts);
    console.log([...users, ...posts]);
    console.log("All data fetched successfully!");
  }).catch(error => {
    console.error("One of the promises failed:", error);
  });


