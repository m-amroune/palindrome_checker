const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");
const textInput = document.querySelector("#text-input");

// arrow function for check value

const alertInput = () => {
    checkBtn.addEventListener("click",() => {
        if(textInput.value === ""){
            alert("Please input a value")
        }
    })
}

alertInput()

// arrow function for clean input

const cleanInput = (input) => {
    const regex = /[^A-Za-z0-9]+/g;
    return input.replace(regex, '').toLowerCase(); 
}

// arrow function for check if PALINDROME 

const checkPalindrome = () => {
  
    checkBtn.addEventListener('click',()=>{
        let originalInput = textInput.value;
          let cleanedInput = cleanInput(originalInput );
        if(cleanedInput === cleanedInput.split('').reverse().join('')){
        
            result.innerHTML = `${originalInput } is a palindrome`
        } else {
             result.innerHTML = `${originalInput } is not a palindrome`
        }
    })
}
checkPalindrome()




