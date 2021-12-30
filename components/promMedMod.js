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

/* MODA */
/* https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects */

const listMod = [2,2,1,5,4,6,1,2,5,1,6,4,2,6,6,5,5,5,5];

function calcModa(array) {

    //Object
    const repeatedNum = {};

    //element es un callback que hace referencia al valor de cada index del arreglo
    array.map((element) => {

        /* repeatedNum[element] es lo mismo que repeatedNum.element */
        if (repeatedNum[element]) {
            repeatedNum[element] += 1;
        } else {
            repeatedNum[element] = 1;
        }
    });

    //Convertir el objeto con las repeticiones respectivas de cada número en un arreglo para así poder acceder a las posiciones en imprimir la moda. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    const finalArray = Object.entries(repeatedNum);
    
    //Ordenar el arreglo de menor a mayor para escoger la última posición que va a representar a la moda.
    //a[1] - b[1]  representan a la segunda posición de cada fila dentro de la matriz. 
    finalArray.sort((a, b) => a[1] - b[1]);

    //Me devuelve la última fila columna 0 o primera columna;
    const moda = finalArray[finalArray.length - 1][0];

    console.log(finalArray);
    console.log(`Moda: ${moda}`);
}

calcModa(listMod);