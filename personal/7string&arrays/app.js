/*_____________________________________________________
El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]) 
_____________________________________________________*/

let elementos = prompt('Ingresa los elementos, separados por comas');

console.log(elementos);
// console.log(elementos.split(","));

const array = (elementos, separador) => elementos.split(separador);
console.log(array(elementos, ' '));