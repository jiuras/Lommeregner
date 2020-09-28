function doTheMath(method) {
    let x = parseFloat(document.getElementById("txt1").value);
    let y = parseFloat(document.getElementById("txt2").value);

    if (method = addition)
        let result = x + y;

    else if (method = subtraction)
        let result = x - y;

    else if (method = multiplication)
        let result = x * y;
        
    else if (method = division)
        let result = x / y;
}

//Få lortet til at virke

function addition() {
    let x = parseFloat(document.getElementById("txt1").value);
    let y = parseFloat(document.getElementById("txt2").value);

    let result = x + y;
    document.getElementById("result").value = result;
}

function subtraction() {
    let x = parseFloat(document.getElementById("txt1").value);
    let y = parseFloat(document.getElementById("txt2").value);

    let result = x - y;
    document.getElementById("result").value = result;
}

function multiplication() {
    let x = parseFloat(document.getElementById("txt1").value);
    let y = parseFloat(document.getElementById("txt2").value);

    let result = x * y;
    document.getElementById("result").value = result;
}

function division() {
    let x = parseFloat(document.getElementById("txt1").value);
    let y = parseFloat(document.getElementById("txt2").value);

    let result = x / y;
    document.getElementById("result").value = result;
}