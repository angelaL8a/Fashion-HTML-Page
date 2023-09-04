document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

const buttonDarkMode = document.getElementById("button_dark_mode");

buttonDarkMode.addEventListener("click", () => {
  if (
    document.documentElement.classList.contains("dark") &&
    localStorage.theme === "dark"
  ) {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  }
});
