const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    copyMe = resultEl.innerText
    navigator.clipboard.writeText(copyMe)
    if(copyMe !== "") {
        alert(`Coppied the password ${copyMe}`)
    } else {
        alert("Generate the password frist and then copy!")
    }
})

generateEl.addEventListener('click', () => {
    generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol)
})

// function to generate random password
function generatePassword(lower, upper, number, symbol) {

    //lower case checked value
    lowercaseEl.value = lower();
    let lowerChecked = "";
    if(lowercaseEl.checked) {
        lowerChecked = lowercaseEl.value
    }
    console.log(lowerChecked)

    //upper case checked value
    uppercaseEl.value = upper();
    let upperChecked = "";
    if(uppercaseEl.checked) {
        upperChecked = uppercaseEl.value
    }
    console.log(upperChecked)

    //numbers checked value
    numbersEl.value = number();
    let numberChecked = "";
    if(numbersEl.checked) {
        numberChecked = numbersEl.value
    }
    console.log(numberChecked)

    //upper case checked value
    symbolsEl.value = symbol();
    let symbolChecked = "";
    if(symbolsEl.checked) {
        symbolChecked = symbolsEl.value
    }
    console.log(symbolChecked)

    //Setting the random myPassword
    let myPassword = "";
    let password = lowerChecked + upperChecked + numberChecked + symbolChecked
    console.log(password)
    for(a of password) {
        myPassword += password[Math.floor(Math.random() * password.length)];
        
    }
    console.log(myPassword)

    if(myPassword.length >= lengthEl.value) {
        myPassword = myPassword.slice(0, lengthEl.value)
        resultEl.innerText = myPassword
        console.log(myPassword)
    } else if(myPassword !== "" && myPassword.length < lengthEl.value) {
        myPasswordy =""
        for(i=0; i<lengthEl.value; i++) {
            myPasswordy += myPassword[Math.floor(Math.random() * myPassword.length)]
        }
        myPassword = myPasswordy
    } else {
        alert("Please Check any of the boxes")
        console.log("Please Check any of the boxes")
    }

    resultEl.innerText = myPassword
}

//random lower case
function getRandomLower() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let randomLowerCase =""
    for(let i=1; i<lowerCase.length; i++) {
        randomLowerCase += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    }
    return randomLowerCase
}

//random upper case
function getRandomUpper() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let randomUpperCase =""
    for(let i=1; i<lowerCase.length; i++) {
        randomUpperCase += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    }
    return randomUpperCase.toUpperCase();
}

//random numbers
function getRandomNumber() {
    const number = "012345679"
    let randomNumber =""
    for(let i=1; i<number.length; i++) {
        randomNumber += number[Math.floor(Math.random() * number.length)]
    }
    return randomNumber
}

// random symbols
function getRandomSymbol() {
    const symbol = "!@#$%^&*"
    let randomSymbol =""
    for(let i=1; i<symbol.length; i++) {
        randomSymbol += symbol[Math.floor(Math.random() * symbol.length)]
    }
    return randomSymbol
}

