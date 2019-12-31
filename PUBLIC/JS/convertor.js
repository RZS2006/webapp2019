function convert() {
    const input = parseFloat(document.getElementById("input").value)
    if (isNaN(input)) {
    document.getElementById("result1").innerHTML = "Please type in a number"
    document.getElementById("result2").innerHTML = ""   
    } else {
    const format = document.getElementById("dropdown").value
    
    let result1;
    let result2;
    let label1;
    let label2;
    
    if (format === "Celsius") {
    result1 = input * 9/5 + 32
    result2 = input + (273.15 * 10 / 10)
    label1 = "Fahrenheit"
    label2 = "Kelvin"
    }
    
    if (format === "Fahrenheit") {
    result1 = (input - 32) * (9/5)
    result2 = result1 + (273.15 * 10 / 10)
    label1 = "Celsius"
    label2 = "Kelvin"
    }
    
    if (format === "Kelvin") {
    result1 = input - (273.15 * 10 / 10)
    result2 = result1 * 9/5 + 32
    label1 = "Celsius"
    label2 = "Fahreheit"
    }
    
    document.getElementById("result1").innerHTML = `${input.toString()} ${format} = ${result1.toString()} ${label1}`
    document.getElementById("result2").innerHTML = `${input.toString()} ${format} = ${result2.toString()} ${label2}`
    }
}

function reset() {
    document.getElementById("input").value = ""
    document.getElementById("result1").innerHTML = ""
    document.getElementById("result2").innerHTML = ""
}