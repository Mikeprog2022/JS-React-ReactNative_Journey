let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");

function checker(){
    icon.style.display = "inline-block";
    let email = emailId.value.trim();
    if (email === "") {
        icon.style.display = "none";
        errorMsg.style.display = "none";
        emailId.style.border = "2px solid #d1d3d4"        
    }
    else if(emailValidate(email)){
        icon.style.color = "#2ecc71";
        icon.innerHTML = '<i class="fas fa-check-circle"></i>'
        errorMsg.style.display = "none";
        emailId.style.border = "2px solid #2ecc71"
    }
    else{
        icon.style.color = "#ff2851";
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>'
        errorMsg.style.display = "block";
        emailId.style.border = "2px solid #ff2851"
    }

}

function emailValidate(email){
    let atSign = email.indexOf("@");
    let dot = email.lastIndexOf(".");
    const valid = (atSign < email.length) && (dot < email.length -2) && atSign < dot;
    if (valid) {
        return true;
    }
    else{
        return false;
    }
}