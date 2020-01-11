let select = document.getElementById("type");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let answer = document.getElementById("answer");

let output;

const calculate = document.getElementById("calculate");
const reset = document.getElementById("reset");

select.addEventListener("change", displayInput());

function displayInput() {
    if (select.value === "circle") {
        input1.placeholder = "Radius";
        input2.classList.add("hidden");
    }

    if (select.value === "triangle") {
        input1.placeholder = "Height"
        input2.placeholder = "Base"
    }

    if (select.value === "square") {
        input1.placeholder = "Length";
        input2.classList.add("hidden");
    }

    if (select.value === "rect") {
        input1.placeholder = "Length"
        input2.placeholder = "Width"
    }

    if (select.value === "pent") {
        input1.placeholder = "Side"
        input2.placeholder = "Apothem"
    }
}

calculate.addEventListener("click", calculate())

const size1 = parseFloat(input1.value)
const size2 = parseFloat(input1.value)

function calculate() {
    if (isNaN(size1) || isNaN(size2)) {
        answer.innerHTML = "Please type in a number"
    } else {
        if (select.value === "circle") {
            output = Math.pow(size1, 2) * 3.14;
        }

        if (select.value === "triangle") {
            output = size1 * size2 / 2;
        }

        if (select.value === "square") {
            output = Math.pow(size1, 2);
        }

        if (select.value === "rect") {
            output = size1 * size2;
        }

        if (select.value === "pent") {
            output = size1 * size2 / 2;
        }

        answer.innerHTML = `Area: ${output} square units`
    }
}

reset.addEventListener("click", reset)

function reset() {
    input1.value = ""
    input2.value = ""
    answer = ""
}