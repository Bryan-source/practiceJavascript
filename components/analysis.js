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


//General Median
function medianGeneral(array) {
    const isEvenNow = isEven(array.length);
    const middle = array.length/2;

    if (isEvenNow) {
        const number1 = array[middle];
        const number2 = array[middle - 1];

        const medianGeneral = calcArithmeticMean([number1, number2]);

        return parseInt(medianGeneral);

    }else {

        return middle;

    }
}

const salaries = mexico.map((object) => {
    return object.salary
});

const salariesSorted = salaries.sort((a, b) => {return a - b});

//TOP 10
const topNumber = 10;
const sliceStart = (salariesSorted.length * (100 - topNumber))/100;
const sliceEnd = salariesSorted.length;

const topTen = salariesSorted.slice(sliceStart, sliceEnd);

//General Median
console.log(medianGeneral(salariesSorted));
//Top 10 Median
console.log(medianGeneral(topTen));

