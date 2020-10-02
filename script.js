function doTheMath(method) {
    let x = Number(document.getElementById("txt1").value);
    let y = Number(document.getElementById("txt2").value);

    let result;

    switch(method) {
        case 'addition':
            result = x + y;
            break;
        case 'subtraction':
            result = x - y;
            break;
        case 'multiplication':
            result = x * y;
            break;
        case 'division':
            result = x / y;
            break;
    }

    document.getElementById("result").value = result;
}

    /*if (method == 'addition') {
        result = x + y;
    }
    else if (method == 'subtraction') {
        result = x - y;
    }
    else if (method == 'multiplication') {
        result = x * y;
    }
    else if (method == 'division') {

    }*/




// Nedestående kode var mit første uddrag af selve koden til lommeregneren. Det virker, er ikke særlig dynamisk eller for den sags skyld pænt.

/*function addition() {
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
*/