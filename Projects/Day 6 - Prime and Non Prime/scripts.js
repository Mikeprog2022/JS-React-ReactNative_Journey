document.addEventListener('DOMContentLoaded', function(){
    const inputValue = document.getElementById("numberInput");
    const info = document.getElementById("resultMessage");
    const btn = document.getElementById("checkButton");
    btn.addEventListener('click', function(){
        const num = parseInt(inputValue.value);
        if (isNaN(num)){
            info.textContent = "PLease enter a value.";
            info.style.color = "red";
            return;
        }

        if(isPrime(num)){
            info.textContent = `${num} is a prime number`
            info.style.color = "green"
        }
        else{
            info.textContent = `${num} is not a prime number`
            info.style.color = "red"
        }
    })

    
    function isPrime(num) {
        const root = Math.sqrt(num);
        if (num < 2) return false;
        if (num <= 3) return true;
        for(let i = 3; i < root; i++){
            if(num % i === 0) return false
        }
        
        return true;
    }

})

