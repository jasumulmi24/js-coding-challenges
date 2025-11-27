// Write createPost(title, body) using POST with fetch() . Return the created post.
async function createPost(title, body) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",          // POST request
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, body }) // send data as JSON
    });

    if (!response.ok) throw new Error("Failed to create post");

    const post = await response.json();
    return post; // return the created post
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

// Usage
createPost("My Title", "Post content here").then(post => console.log(post));
