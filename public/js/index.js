const ThemeChangeEvent = new Event("change-theme", {
  bubbles: true,
  cancelable: true,
});
let websiteTheme;

function handleWebsiteThemeChange() {
  if (
    websiteTheme === "dark" ||
    (websiteTheme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

document.addEventListener("DOMContentLoaded", (_) => {
  websiteTheme = localStorage.getItem("theme") || "system";
  const dateContainer = document.querySelector(".date-container");
  const themeSelectorElements = document.querySelectorAll(
    "input[name=theme-selector]"
  );
  // Register theme switching to elements
  themeSelectorElements.forEach((element) => {
    if (websiteTheme === element.value) {
      element.checked = true;
    }
    element.addEventListener("change", (e) => {
      const target = e.target;
      const isChecked = target.checked;
      if (isChecked) {
        localStorage.setItem("theme", target.value);
        websiteTheme = target.value;
        window.dispatchEvent(ThemeChangeEvent);
      }
    });
  });

  handleWebsiteThemeChange();

  window.addEventListener("change-theme", (e) => {
    handleWebsiteThemeChange();
  });
  setInterval(() => {
    let currentDate = Date.now();
    dateContainer.innerHTML = new Date(currentDate).toUTCString();
  }, 1000);
});
