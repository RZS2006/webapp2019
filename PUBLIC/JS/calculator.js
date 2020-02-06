const previous = document.querySelector(".previous")
const current = document.querySelector(".current")

const numbersBtns = document.querySelectorAll(".number")
const operatorsBtns = document.querySelectorAll(".operator")
const decimalBtn = document.querySelector(".decimal")
const equalsBtn = document.querySelector(".equals")
const allclearBtn = document.querySelector(".allclear")
const backspaceBtn = document.querySelector(".backspace")
const answerBtn = document.querySelector(".answer")

let inputArr = []
let currentVal = ""
let previousVal = ""
current.innerHTML = currentVal
previous.innerHTML = previousVal
let answer;

const append = (num) => {
    currentVal += num
    current.innerHTML = currentVal
}

const operation = (oper) => {
    if (currentVal === "") {
        return
    }

    inputArr.push(currentVal)
    previousVal += currentVal
    currentVal = ""

    switch (oper) {
        case "+":
            inputArr.push("+")
            previousVal += "+"
            break;
        case "-":
            inputArr.push("-")
            previousVal += "-"
            break;
        case "×":
            inputArr.push("*")
            previousVal += "×"
            break;
        case "÷":
            inputArr.push("/")
            previousVal += "÷"
            break;
    }

    current.innerHTML = currentVal
    previous.innerHTML = previousVal
}

const allclear = () => {
    inputArr = []
    currentVal = ""
    previousVal = ""
    current.innerHTML = currentVal
    previous.innerHTML = previousVal
}

const backspace = () => {
    currentVal = currentVal.slice(0, -1)
    current.innerHTML = currentVal
}

const appendDecimal = () => {
    if (!currentVal.includes(".")) {
        currentVal += "."
        current.innerHTML = currentVal
    }
}

const compute = () => {
    inputArr.push(currentVal)
    previousVal += currentVal
    let arrStr = inputArr.join("")
    answer = eval(arrStr)
    currentVal = ""
    current.innerHTML = answer
    previous.innerHTML = previousVal

}

const shift = () => {
    currentVal = answer
    previousVal = ""
    inputArr = []
    current.innerHTML = currentVal
    previous.innerHTML = previousVal
}

numbersBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        append(btn.innerText)
    })
})

operatorsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        operation(btn.innerText)
    })
})

decimalBtn.addEventListener("click", appendDecimal)
equalsBtn.addEventListener("click", compute)
allclearBtn.addEventListener("click", allclear)
backspaceBtn.addEventListener("click", backspace)
answerBtn.addEventListener("click", shift)