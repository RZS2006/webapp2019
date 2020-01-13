// Global Variables

let select = document.getElementById("type");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answernum = document.getElementById("answernum");

let calculatebtn = document.getElementById("calculate");
let resetbtn = document.getElementById("reset");

// If select is changed, input display will be updated

select.addEventListener("change", displayInput);

function displayInput() {
    switch (select.value) {
        case "circle":
            input1.placeholder = "Radius";
            input2.classList.add("hidden");
            break;
        case "triangle":
            input1.placeholder = "Height";
            input2.placeholder = "Base";
            input2.classList.remove("hidden");
            break;
        case "square":
            input1.placeholder = "Length";
            input2.classList.add("hidden");
            break;
        case "rect":
            input1.placeholder = "Length"
            input2.placeholder = "Width"
            input2.classList.remove("hidden");
            break;
        case "pent":
            input1.placeholder = "Side"
            input2.placeholder = "Apothem"
            input2.classList.remove("hidden");
            break;
        case "hex":
            input1.placeholder = "Side"
            input2.placeholder = "Apothem"
            input2.classList.remove("hidden");
            break;
    }
}

// If calculatebtn is clicked, the area wil be calculated

calculatebtn.addEventListener("click", calculate);

function calculate() {
    let size1 = parseFloat(input1.value)
    let size2 = parseFloat(input2.value)
    let validity;

    // Checks if inputs are valid

    if (isNaN(size1)) {
        validity = false;
    } else if (select.value !== "circle" && select.value !== "square" && isNaN(size2)) {
        validity = false;
    } else {
        validity = true;
    }

    // If inputs are not valid

    if (!validity) { 
        answer1.innerHTML = "Please type in a number";
        answernum.innerHTML = ""
        answer2.innerHTML = ""
    } 

    // If inputs are valid
    
    else if (validity) {
        let output;
        switch (select.value) {
            case "circle":
                output = Math.pow(size1, 2) * 3.14;
                break;
            case "triangle":
                output = (size1 * size2) / 2;
                break;
            case "square":
                output = Math.pow(size1, 2);
                break;
            case "rect":
                output = size1 * size2;
                break;
            case "pent":
                output = size1 * size2 / 2 * 5;
                break;
            case "hex":
                output = size1 * size2 / 2 * 6;
                break;
        }

        answernum.innerHTML = output;
        answer1.innerHTML = "Area: "
        answer2.innerHTML = " square units"
    }
}

// If resetbtn is clicked, the inputs and answers will be reset

resetbtn.addEventListener("click", reset);

function reset() {
    input1.value = "";
    input2.value = "";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answernum.innerHTML = "";
}