/*_____________________________________________________
Dado el array = [1,2,3,4,5,6]*/
// --> Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
const array = [1,2,3,4,5,6];

// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// --> Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// --> Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
// array.forEach(function (numeros) {
//     console.log(numeros);
// })
// array.forEach((numeros) => console.log(numeros))

// -->Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

// let nuevoArray = [];
// array.forEach(function (numeros){
//     nuevoArray.push(numeros + 1);
// })
// console.log(nuevoArray);


// --> Generar una copia de un array pero con todos los elementos incrementado en 1.
// const newA = array.map((numero) => (numero + 1));
// console.log(newA);


// --> Calcular el promedio
// console.log(array);
// let suma = 0;

// for (let i = 0; i < array.length; i++) {
//     suma = suma + array[i];
// }

// const promedio = (suma/array.length);
// console.log(`La suma total es ${suma}`);
// console.log(`El Promedio es ${promedio}`);
/*_____________________________________________________*/



/*_____________________________________________________
Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.
_____________________________________________________*/
// const nuevoArray = [];

// for (let i = 0; i < 20; i++) {
//     const number = Math.floor(Math.random() * 20) + 1;
//     nuevoArray.push(number)    
// }
// console.log(nuevoArray);


/*_____________________________________________________
Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.
_____________________________________________________*/
// const nuevoArray = [];
// let num = prompt('Introduce un numero');

// for (let i = 0; i < num; i++) {
//     const number = Math.floor(Math.random() * num) + 1;
//     nuevoArray.push(number)    
// }
// console.log(nuevoArray);


/*_____________________________________________________
Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
_____________________________________________________*/
const arrayColors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let color = prompt('Introduce un color');

console.log(color);

const validar = arrayColors.includes(color) ? alert('Acertaste') : alert('Intenta nuevamente');