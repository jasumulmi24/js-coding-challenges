// Write code to set a cookie "token=abc123" that expires in 24 hours.

document.cookie = "token=abc123; max-age=86400";
console.log(document.cookie);