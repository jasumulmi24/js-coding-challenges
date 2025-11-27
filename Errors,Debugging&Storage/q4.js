// Store the object {theme:"dark", logged:true} in:
// localStorage
// sessionStorage
// Convert to/from JSON properly

const userSettings = { theme: "dark", logged: true };

// --- Store in localStorage ---
localStorage.setItem("settings", JSON.stringify(userSettings));

// --- Store in sessionStorage ---
sessionStorage.setItem("settings", JSON.stringify(userSettings));

// --- Retrieve from localStorage ---
const localData = JSON.parse(localStorage.getItem("settings"));
console.log("LocalStorage:", localData);

// --- Retrieve from sessionStorage ---
const sessionData = JSON.parse(sessionStorage.getItem("settings"));
console.log("SessionStorage:", sessionData);
