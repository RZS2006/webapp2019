// Global Variables

let select = document.getElementById("type");
let input = document.getElementById("input");
let answernum1 = document.getElementById("answernum1");
let answernum2 = document.getElementById("answernum2");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");

let convertbtn = document.getElementById("convert");
let resetbtn = document.getElementById("reset");

convertbtn.addEventListener("click", convert)

function convert() {
    let size = parseFloat(input.value)
    let validity;

    if (isNaN(size)) {
        validity = false; 
    } 
    else {
        validity = true;
    }

    if (!validity) {
        answernum1.innerHTML = ""
        answernum2.innerHTML = ""
        answer1.innerHTML = "Please type in a number"
        answer2.innerHTML = ""
    }

    else if (validity) {
        let result1;
        let result2;
        let label1;
        let label2;

        switch (select.value) {
            case "Celsius":
                result1 = (size * 9/5 + 32) * 10 / 10
                result2 = (size + 273.15) * 10 / 10
                label1 = "Fahrenheit"
                label2 = "Kelvin"
                break;
            case "Fahrenheit":
                result1 = (size - 32) * (9/5) * 10 / 10
                result2 = (result1 + 273.15) * 10 / 10
                label1 = "Celsius"
                label2 = "Kelvin"
                break;
            case "Kelvin":
                result1 = (size - 273.15) * 10 / 10
                result2 = (result1 * 9/5 + 32) * 10 / 10
                label1 = "Celsius"
                label2 = "Fahreheit"
                break;
        }
        
        answernum1.innerHTML = result1.toFixed(2)
        answernum2.innerHTML = result2.toFixed(2)
        answer1.innerHTML = ` ${label1}`
        answer2.innerHTML = ` ${label2}`
    }
}

resetbtn.addEventListener("click", reset)

function reset() {
    input.value = ""
    answernum1.innerHTML = ""
    answernum2.innerHTML = ""
    answer1.innerHTML = ""
    answer2.innerHTML = ""
}