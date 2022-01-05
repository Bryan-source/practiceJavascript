//Helpers

function isEven(number) {
    return (number % 2 === 0);
}

/* Arithmetic Mean */
function calcArithmeticMean(array) {

    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const getSum = array.reduce(reducer);

    const average = getSum/array.length;

    return average;
}

