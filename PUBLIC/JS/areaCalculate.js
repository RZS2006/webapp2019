let select = document.getElementById("type");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answernum = document.getElementById("answernum");

let output;

let calculatebtn = document.getElementById("calculate");
let resetbtn = document.getElementById("reset");

select.addEventListener("change", displayInput);

function displayInput() {
    if (select.value === "circle") {
        input1.placeholder = "Radius";
        input2.classList.add("hidden");
    }

    if (select.value === "triangle") {
        input1.placeholder = "Height";
        input2.placeholder = "Base";
        input2.classList.remove("hidden");
    }

    if (select.value === "square") {
        input1.placeholder = "Length";
        input2.classList.add("hidden");
    }

    if (select.value === "rect") {
        input1.placeholder = "Length"
        input2.placeholder = "Width"
        input2.classList.remove("hidden");
    }

    if (select.value === "pent") {
        input1.placeholder = "Side"
        input2.placeholder = "Apothem"
        input2.classList.remove("hidden");
    }

    if (select.value === "hex") {
        input1.placeholder = "Side"
        input2.placeholder = "Apothem"
        input2.classList.remove("hidden");
    }
}

calculatebtn.addEventListener("click", calculate())

function calculate() {
    const size1 = parseFloat(input1.value)
    const size2 = parseFloat(input2.value)
    if (isNaN(size1)) {
        answer.innerHTML = "Please type in a number"
    } else if (select.value !== "circle" && select.value !== "square" && isNaN(size2)) {
        answer.innerHTML = "Please type in a number"
    } else {
        if (select.value === "circle") {
            output = Math.pow(size1, 2) * 3.14;
        }

        if (select.value === "triangle") {
            output = (size1 * size2) / 2;
        }

        if (select.value === "square") {
            output = Math.pow(size1, 2);
        }

        if (select.value === "rect") {
            output = size1 * size2;
        }

        if (select.value === "pent") {
            output = size1 * size2 / 2 * 5;
        }

        if (select.value === "hex") {
            output = size1 * size2 / 2 * 6;
        }

        answernum.innerHTML = output;
        answer1.innerHTML = "Area: "
        answer2.innerHTML = " square units"
        
    }
}

resetbtn.addEventListener("click", reset)

function reset() {
    input1.value = "";
    input2.value = "";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answernum.innerHTML = "";
}