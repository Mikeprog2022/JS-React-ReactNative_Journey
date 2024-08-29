const input = document.getElementById("password");
const generateBtn = document.getElementById("btn");
const copyBtn = document.getElementById("copy"); 
generateBtn.onclick = generatePassword;
copyBtn.onclick = copy;

function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+}{|\/><=-`~[]";
    
    let password = "";

    for(let i = 0; i < 8; i++){
        password += characters[Math.floor(Math.random()* characters.length)]
        // password += characters.charAt(Math.floor(Math.random()* characters.length))
    }

    input.value = password;
}

function copy(){
    const currentPassword = input.value.trim();
    if (!currentPassword) {
        return alerts(1)
    }
    navigator.clipboard.writeText(currentPassword).then(alerts(2))
    
}

function alerts(index) {
    if (index === 1) {
        alert("Please generate a password first.")
    }
    else{
        return alert("Password has been copied.")
    }
}