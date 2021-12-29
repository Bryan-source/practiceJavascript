const arrayNum = [20, 12, 34, 45];

/* Arithmetic Mean */
function calcArithmeticMean(array) {

    /* función que usa reduce para hacer una suma iterativa  con el arreglo */
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const getSum = array.reduce(reducer);

    const average = getSum/array.length;

    return average;
}

/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce */

/* Median */

function calcMedian(array) {

    //Ordenar lista
    const listOrdered = array.sort((a, b) => a - b);

    console.log(listOrdered);
    const middlePos = parseInt(listOrdered.length/2);
    let median;

    const isEven = (array) => {
        if (array.length % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    //Se calcula el promedio para cuando el tamaño del arreglo sea par
    const average = (value1, value2) => {
        return (value1 + value2) / 2;
    }

    //Determina si el tamaño de la listOrdereda es par o impar.
    if (isEven(listOrdered)) {
        const element1 = listOrdered[middlePos];
        const element2 = listOrdered[middlePos - 1];
        
        median = average(element1, element2);
        return median;
        

    } else {
        median = listOrdered[middlePos];
        return median;
    }


}