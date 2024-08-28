const btn = document.getElementById("generate-btn");
const number = document.getElementById("random-number");

function generateRandom() {
    const num = Math.floor((Math.random()*100) + 1);
    number.textContent = num;
}

btn.addEventListener("click", generateRandom);