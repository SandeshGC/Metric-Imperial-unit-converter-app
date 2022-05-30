const convThis = document.getElementById("value-to-convert");
const userInputField = document.getElementById("user-input-field")
let num = userInputField.value;
const convLen = document.getElementById("len-conv")
const convVol = document.getElementById("vol-conv")
const convMass = document.getElementById("mass-conv")
const body = document.getElementById("body");
const chgModeBtn = document.getElementById("chg-mode-btn")
const lowerSection = document.getElementById("lower-section");
const calcBtn = document.getElementById("calc-btn")  //the calculate button

//start of conversion
calc(); //initially convert while page loads
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
}//end of conversion
//changing theme
function chgColorMode() {
    clickCount += 1; //starts with 1
    if (clickCount % 2 === 0) //even no. of clicks change theme to light
        chgToLight();
    else if (chgModeBtn.innerText = "Light") //odd no. of clicks change theme to dark
        chgToDark();
}
function chgColorMode() { //changes color mode
    if (body.classList.contains("light-mode")) { //changing to dark if light
        body.classList.remove("light-mode")
        body.classList.add("dark-mode")
        calcBtn.classList.toggle("dark-mode");
        chgModeBtn.classList.toggle("dark-mode")
        userInputField.classList.toggle("dark-mode") //input box
        convLen.style.color = "#D2D2D2";  //small texts in the page
        convVol.style.color = "#D2D2D2";
        convMass.style.color = "#D2D2D2";
        chgModeBtn.textContent = "Dark"
    }
    else { //changing to light because it's dark
        body.classList.remove("dark-mode") //removes dark-mode class
        body.classList.add("light-mode") //adds light-mode class
        calcBtn.classList.toggle("dark-mode");
        chgModeBtn.classList.toggle("dark-mode")
        userInputField.classList.toggle("dark-mode")
        convLen.style.color = "#4E4E4E";
        convVol.style.color = "#4E4E4E";
        convMass.style.color = "#4E4E4E";
        chgModeBtn.textContent = "Light"
    }
}//end of changing theme