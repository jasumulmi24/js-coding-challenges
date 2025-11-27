// Fetch:
// /posts?_page=1 then /posts?_page=2
// Combine results into one array

async function fetchTwoPages() {
  const page1Promise = fetch("https://jsonplaceholder.typicode.com/posts?_page=1")
    .then(res => res.json());
  const page2Promise = fetch("https://jsonplaceholder.typicode.com/posts?_page=2")
    .then(res => res.json());

  const [page1, page2] = await Promise.all([page1Promise, page2Promise]);

  return [...page1, ...page2]; 
}


fetchTwoPages().then(allPosts => console.log(allPosts));
