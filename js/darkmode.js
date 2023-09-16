// Add an event listener for the DOMContentLoaded event to check and apply the dark mode setting
document.addEventListener("DOMContentLoaded", () => {
  // Check if the 'localStorage' contains a 'theme' value set to 'dark'
  if (localStorage.theme === "dark") {
    // If the 'theme' is 'dark', add the 'dark' class to the document's root element
    document.documentElement.classList.add("dark");
  } else {
    // If the 'theme' is not 'dark', remove the 'dark' class from the document's root element
    document.documentElement.classList.remove("dark");
  }
});

// Get a reference to the dark mode toggle button
const buttonDarkMode = document.getElementById("button_dark_mode");

// Add a click event listener to the dark mode toggle button
buttonDarkMode.addEventListener("click", () => {
  // Check if the document's root element already has the 'dark' class and 'localStorage' has 'theme' set to 'dark'
  if (
    document.documentElement.classList.contains("dark") &&
    localStorage.theme === "dark"
  ) {
    // If it's already in dark mode, switch to light mode by updating 'localStorage' and removing the 'dark' class
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  } else {
    // If it's not in dark mode, switch to dark mode by updating 'localStorage' and adding the 'dark' class
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  }
});
