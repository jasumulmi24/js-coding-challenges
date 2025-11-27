// Write an async function that fetches from an invalid URL, catches the error, and
// returns "Failed"

async function fetchUrl() {debugger
  try {
    const result = await fetch(`https://jsonplacehdfsdfolder.typicode.com/users/`).then(res=> res.json());
    console.log('Result:', result);
  } catch (error) {
      console.log("Failed") ;
  }
}


fetchUrl();