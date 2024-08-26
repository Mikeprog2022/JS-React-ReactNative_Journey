const btn = document.querySelector("button");
const flexible = document.getElementById("toBeUpdated");

function changeName(params) {
    const word = prompt("Enter any word")
    flexible.textContent = word;
}

btn.onclick = changeName;