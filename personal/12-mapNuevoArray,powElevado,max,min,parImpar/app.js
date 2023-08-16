/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
const arrayPotencia = (arrayNum) => {
    const result = arrayNum.map( (num) => {
        return Math.pow(num,2)
    } )
    console.log(result);
}
arrayPotencia([1,4,5]);

/*_____________________________________________________________________________
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/
const arrayMaxMin = (arrayNume) => {
    const numMax = Math.max(...arrayNume);
    const numMin = Math.min(...arrayNume);
    console.log(...arrayNume);
    console.log(`El numero maximo del array es ${numMax} y el minimo es ${numMin}`);
}
arrayMaxMin([1, 4, 5, 99, -60]);

/*_____________________________________________________________________________
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
const arrayCompleto = (arrayNumeros) => {
    const arrayPar = [];
    const arrayImpar = [];

    // for (let i = 0; i < arrayNumeros.length; i++) {
    //     if (i % 2 === 0) {
    //         arrayPar.push(i);
    //     } else {
    //         arrayImpar.push(i)
    //     }
    // }

    //OPCION CON FOREACH:
    arrayNumeros.forEach(i => (i % 2 === 0) ? arrayPar.push(i):arrayImpar.push(i));    

    console.log(`Los numeros impares son: [${arrayImpar}]`);
    console.log(`Los numeros pares son: [${arrayPar}]`);
}

arrayCompleto([1,2,3,4,5,6,7,8,9,0]);