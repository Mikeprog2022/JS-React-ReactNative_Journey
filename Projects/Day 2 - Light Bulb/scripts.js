const switchBtn = document.querySelector(".switch");
const body = document.body;

function addClass() {
    body.classList.toggle("on")
}

switchBtn.addEventListener("click", addClass);