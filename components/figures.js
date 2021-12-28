const pi = Math.PI;

/* Circle */
function circlePerimeter(radio) {
    const diameter = radio*2;
    return diameter*pi;
}

function circleArea(radio) {
    return (radio**2)*pi;
}

/* Isosceles Triangle */
function isoscelesHeight(side, base) {
    const middleBase = base/2;
    return Math.sqrt(Math.pow(side, 2) - Math.pow(middleBase, 2));
}

/* Button Functions */
/* Circle */
function calcPerimeterCircle() {
    const inputRadio = document.getElementById("radioCircle");
    const radio = inputRadio.value;
    const perimeter = circlePerimeter(radio);
    document.getElementById("showPerimeter").innerHTML = Number(perimeter).toFixed(2);
}

function calcAreaCircle() {
    const inputRadio = document.getElementById("radioCircle");
    const radio = inputRadio.value;
    const area = circleArea(radio);
    document.getElementById("showArea").innerHTML = Number(area).toFixed(2);
}

/* Isosceles Triangle */
function calcTriangleHeight() {
    const inputSide = document.getElementById("side").value;
    const inputBase = document.getElementById("base").value;
    
    //Validate Base
    const validateBase = document.getElementById("validateBase");

    if (inputBase === inputSide || inputBase <= 0) {
        validateBase.className = 'show-validateBase';
        document.getElementById("showHeight").innerHTML = "";
    } else {
        const height = isoscelesHeight(inputSide, inputBase);
        document.getElementById("showHeight").innerHTML = Number(height).toFixed(2);
        validateBase.className = 'hide-validateBase';
    }
}