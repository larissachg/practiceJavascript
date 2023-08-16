/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/
const arrayNumeros = (array) => {
  const arrayAsc = [...array].sort((a, b) => a - b);
  const arrayDes = [...array].sort((a, b) => b - a); //Se usa el spreadOperator para cortar el primer sort y que se ejecute tambien el segundo (ambos)
  console.log({ arrayAsc, arrayDes });
  return { arrayAsc, arrayDes };
};
arrayNumeros([7, 5, 7, 8, 6]);

/*_____________________________________________________________________________
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/
console.warn("Duplicados");

const EliminarDuplicados = (array) => {
//   const arrayUnic = [];
//   array.forEach((i) => {
//     if (!arrayUnic.includes(i)) {
//       arrayUnic.push(i);
//     }
//   });
//   console.log(arrayUnic);

    //OPCION CON SET:
    const result = new Set([...array])
    console.log(result);
};
EliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

/*_____________________________________________________________________________
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
console.warn("Promedio");

const calcularPromedio = (array) => {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  const promedio = suma / array.length;

  //OPCION CON REDUCE:
  const promedioReduce = array.reduce( (accumulador,valorActual) => accumulador+valorActual) / array.length;

  console.log(array);
  console.log(`La suma total es ${suma} y el promedio es ${promedio}`);
  console.log(`La suma total es ${suma} y el promedio es ${promedioReduce}`);
};

calcularPromedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
