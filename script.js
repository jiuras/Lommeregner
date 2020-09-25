function addition() {
    let x = parseInt(document.getElementById("txt1").value);
    let y = parseInt(document.getElementById("txt2").value);

    let result = x + y;
    document.getElementById("result").value = result;
}

function subtraction() {
    let x = parseInt(document.getElementById("txt1").value);
    let y = parseInt(document.getElementById("txt2").value);

    let result = x - y;
    document.getElementById("result").value = result;
}

function multiplication() {
    let x = parseInt(document.getElementById("txt1").value);
    let y = parseInt(document.getElementById("txt2").value);

    let result = x * y;
    document.getElementById("result").value = result;
}

function division() {
    let x = parseInt(document.getElementById("txt1").value);
    let y = parseInt(document.getElementById("txt2").value);

    let result = x / y;
    document.getElementById("result").value = result;
}