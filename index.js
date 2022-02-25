let convThis = document.getElementById("value-to-convert");
let userInputField = document.getElementById("user-input-field")
let num = userInputField.value;
let convLen = document.getElementById("len-conv")
let convVol = document.getElementById("vol-conv")
let convMass = document.getElementById("mass-conv")

calc();

function calc() {
    num = userInputField.value;
    convThis.textContent = num;
    //converting length
    let meters = parseFloat((num * 0.3048).toFixed(3)); //setting only 3 digits after decimal
    let feet = parseFloat((num * 3.2808).toFixed(3)); //toFixed converts to a string with only 3 decimal digits
    convLen.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
    //converting volume
    let gallons = parseFloat((num * 0.264172).toFixed(3));
    let liters = parseFloat((num * 3.785411784).toFixed(3));
    convVol.textContent = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
    //converting mass
    let kgs = parseFloat((num * 0.453592).toFixed(3));
    let pounds = parseFloat((num * 2.20462).toFixed(3));
    convMass.textContent = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kgs} kilos`
}
//changing theme
let chgModeBtn = document.getElementById("chg-mode-btn")
let clickCount = 0; //no. of times the change mode button is clicked
function chgColorMode() {
    clickCount += 1; //starts with 1
    if (clickCount % 2 === 0) //even no. of clicks change theme to light
        chgToLight();
    else if (chgModeBtn.innerText = "Light") //odd no. of clicks change theme to dark
        chgToDark();
}
let body = document.getElementsByTagName("body")[0]
let lowerSection = document.getElementById("lower-section");
let calcBtn = document.getElementById("calc-btn")

function chgToDark() {
    chgModeBtn.textContent = "Light"
    chgModeBtn.style.backgroundColor = "#1F2937"
    chgModeBtn.style.color = "white"
    body.style.backgroundColor = "#1F2937"
    body.style.transition = "0.6s"
    lowerSection.style.color = "white";
    convLen.style.color = "#D2D2D2";
    convVol.style.color = "#D2D2D2";
    convMass.style.color = "#D2D2D2";
    calcBtn.style.backgroundColor = "#1F2937"
    calcBtn.style.color = "white"
    userInputField.style.backgroundColor = "#1F2937"
    userInputField.style.color = "white"


    // console.log("changing color mode to Dark")
}

function chgToLight() {
    chgModeBtn.textContent = "Dark"
    chgModeBtn.style.backgroundColor = "white"
    chgModeBtn.style.color = "black"
    body.style.backgroundColor = "#FBF7EE"
    body.style.transition = "0.6s"
    lowerSection.style.color = "black"
    convLen.style.color = "#4E4E4E";
    convVol.style.color = "#4E4E4E";
    convMass.style.color = "#4E4E4E";
    userInputField.style.backgroundColor = "white"
    userInputField.style.color = "#1F2937"

    // console.log("changing color mode to Light")
}