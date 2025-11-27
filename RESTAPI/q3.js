
// Write a fetch request that adds: Authorization: "Bearer 12345" Print the response JSON.
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET", // or "POST", etc.
  headers: {
    "Authorization": "Bearer 12345",
    "Content-Type": "application/json"
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
