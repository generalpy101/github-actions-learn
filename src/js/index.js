document.addEventListener("DOMContentLoaded", _ => {
    const dateContainer = document.querySelector(".date-container");
    let currentDate = Date.now()
    dateContainer.innerHTML = new Date(currentDate).toUTCString()
})