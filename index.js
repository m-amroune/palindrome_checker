const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");
const textInput = document.querySelector("#text-input");

// INPUT

const alertInput = () => {
    checkBtn.addEventListener("click",() => {
        if(textInput.value === ""){
            alert("Please input a value")
        }
    })
}

alertInput()

// CLEAN

// PALINDROME ?

// RESULT DISPLAY