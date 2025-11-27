// Fetch /posts and /comments in parallel using Promise.all() and return:
// { posts: [...], comments: [...] }

async function fetchPostsAndComments() {
  const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
  const commentsPromise = fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json());

  const [posts, comments] = await Promise.all([postsPromise, commentsPromise]);

  return { posts, comments };
}


fetchPostsAndComments().then(result => console.log(result));
