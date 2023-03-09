document.addEventListener("DOMContentLoaded", (_) => {
  const dateContainer = document.querySelector(".date-container");
  setInterval(() => {
    let currentDate = Date.now();
    dateContainer.innerHTML = new Date(currentDate).toUTCString();
  }, 1000);
});
